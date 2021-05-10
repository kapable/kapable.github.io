import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import TEST from '../../api/TESTS';

// list of items
let current_url = window.location.href;
let list = [];
if(current_url.includes("JP")) {
  TEST.forEach((el,index) => {
    if(el.info.lang === "JP") {
      if(el.info.horizontalBanner) {
        let item = {name: 'item'+index, banner: el.info.horizontalBanner, link: "https://ktestone.com/kapable.github.io/" + el.info.mainUrl + "/"}
        list.push(item)
      }
    }
  })
} else if (current_url.includes("Eng") || current_url.includes("Ind") || current_url.includes("Rus") || current_url.includes("Arb") || current_url.includes("ES") || current_url.includes("CN")) {
  TEST.forEach((el, index) => {
    if(el.info.lang === "Eng"){
      if(el.info.horizontalBanner){
        let item = {name: 'item'+index, banner: el.info.horizontalBanner, link: "https://ktestone.com/kapable.github.io/" + el.info.mainUrl + "/"}
        list.push(item)
      }
    }
  })
} else {
  TEST.forEach((el, index) => {
    if(el.info.lang === "Kor"){
      if(el.info.horizontalBanner){
        let item = {name: 'item'+index, banner: el.info.horizontalBanner, link: "https://ktestone.com/kapable.github.io/" + el.info.mainUrl + "/"}
        list.push(item)
      }
    }
  })
}
list[0].name = "item1";

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

export const MenuT = (TEST, selected) => {
  TEST.forEach(el => {
    if(el.info.mainUrl === this.state.current_test) {
      console.log(el.info.lang);
      const _current_lang = el.info.lang;
      this.setState({
        current_lang: _current_lang
      })
    }
  })
  TEST.map(el => {
    if((this.state.current_lang === "Kor")&&(el.info.lang === this.state.current_lang)) {
      const {name, banner, link} = el;
  
      return <MenuItem text={name} banner={banner} link={link} key={name} selected={selected} />;
    }
    if ((this.state.current_lang === "JP")&&(el.info.lang === this.state.current_lang)) {
      const {name, banner, link} = el;
  
      return <MenuItem text={name} banner={banner} link={link} key={name} selected={selected} />;
    }
    if((this.state.current_lang !== "Kor") && (this.state.current_lang !== "JP") && (el.info.lang !== "Kor") && (el.info.lang !== "JP")) {
      const {name, banner, link} = el;
  
      return <MenuItem text={name} banner={banner} link={link} key={name} selected={selected} />;
    }
  });
  
}


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
    transition: 0.3,
    wheel: false,
  };
  constructor(props) {
    super(props);
    // call it again if items count changes
    // this.menuItems = Menu(list, selected);
    this.state = {
      current_test: this.props.test,
      current_lang: ''
    }
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
          // arrowLeft={ArrowLeft}
          // arrowRight={ArrowRight}
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
          // inertiaScrolling={true}
          // inertiaScrollingSlowdown={0.25}
        />
      </div>
    );
  }
}

export default horizontalScrolling;