import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

// list of items
let list = [
  { name: 'item1' , banner: "https://images.ktestone.com/horizontalNewTest/USA/personalColorEng.png" , link: "https://ktestone.com/kapable.github.io/personalColorEng/" },
  { name: 'item2' , banner: "https://images.ktestone.com/horizontalNewTest/USA/dringkingHabitEng.png" , link: "https://ktestone.com/kapable.github.io/dringkingHabitEng/" },
  { name: 'item3' , banner: "https://images.ktestone.com/horizontalNewTest/USA/personalIncenseEng.png" , link: "https://ktestone.com/kapable.github.io/personalIncenseEng/" },
  { name: 'item4' , banner: "https://images.ktestone.com/horizontalNewTest/USA/personalColorFactEng.png" , link: "https://ktestone.com/kapable.github.io/personalColorFactEng/" },
  { name: 'item5' , banner: "https://images.ktestone.com/horizontalNewTest/Korea/personalColor.png" , link: "https://ktestone.com/kapable.github.io/personalColor/" },
  { name: 'item6' , banner: "https://images.ktestone.com/horizontalNewTest/Korea/dringkingHabit.png" , link: "https://ktestone.com/kapable.github.io/dringkingHabit/" },
  { name: 'item7' , banner: "https://images.ktestone.com/horizontalNewTest/Korea/personalIncense.png" , link: "https://ktestone.com/kapable.github.io/personalIncense/" },
  { name: 'item8' , banner: "https://images.ktestone.com/horizontalNewTest/Korea/personalColorFact.png" , link: "https://ktestone.com/kapable.github.io/personalColorFact/" },
];

// One item component
// selected prop will be passed
const MenuItem = ({text, banner, link, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`} 
    ><a target="_blank"
    rel="noopener noreferrer"
    href={link}
    ><img src={banner} alt={text} style={{width:'13rem'}}/></a></div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name, banner, link} = el;

    return <MenuItem text={name} banner={banner} link={link} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class horizontalScrolling extends Component {
    state = {
        alignCenter: true,
        clickWhenDrag: false,
        dragging: true,
        hideArrows: true,
        hideSingleArrow: true,
        itemsCount: list.length,
        scrollToSelected: false,
        selected: "item1",
        translate: 0,
        transition: 0.5,
        wheel: false
      };
  constructor(props) {
    super(props);
    // call it again if items count changes
    // this.menuItems = Menu(list, selected);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onLastItemVisible = () => {
    console.log("last item is visible");

    const newItems = Array(5)
      .fill(1)
      .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
    list = list.concat(newItems);
    this.menuItems = Menu(list, list.slice(-1)[0].name);
    this.setState({
      itemsCount: list.length,
      selected: this.state.selected
    });
  };

  onUpdate = ({ translate }) => {
    // console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    // console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const {
        alignCenter,
        clickWhenDrag,
        hideArrows,
        dragging,
        hideSingleArrow,
        scrollToSelected,
        selected,
        translate,
        transition,
        wheel
      } = this.state;
  
    const menu = this.menuItems;

    return (
      <div className="horizontal-scrolling">
        <h3>▼ Go to New Test ▼</h3>
        <ScrollMenu
          alignCenter={alignCenter}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />
      </div>
    );
  }
}

export default horizontalScrolling;