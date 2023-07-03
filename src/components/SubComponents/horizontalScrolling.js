import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import TEST from '../../api/TESTS';
import ReactGA4 from 'react-ga4';

// const Arrow = ({ text, className }) => {
//   return (
//     <div
//       className={className}
//     >{text}</div>
//   );
// };


// const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
// const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class horizontalScrolling extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    // this.menuItems = Menu(list, selected);
    let current_url = window.location.href; // get current url
    let _list = [];
    // in case for each language
    if(current_url.includes("JP")) {
      TEST.forEach((el,index) => {
        if(el.info.lang === "JP") {
          if(el.info.horizontalBanner) {
            let item = {name: 'item'+index, banner: el.info.horizontalBanner, link: "https://ktestone.com/kapable.github.io/" + el.info.mainUrl + "/"}
            _list.push(item)
          }
        }
      })
    } else if (current_url.includes("Eng") || current_url.includes("Ind") || current_url.includes("Rus") || current_url.includes("Arb") || current_url.includes("ES") || current_url.includes("CN")) {
      TEST.forEach((el, index) => {
        if(el.info.lang === "Eng"){
          if(el.info.horizontalBanner){
            let item = {name: 'item'+index, banner: el.info.horizontalBanner, link: "https://ktestone.com/kapable.github.io/" + el.info.mainUrl + "/"}
            _list.push(item)
          }
        }
      })
    } else {
      TEST.forEach((el, index) => {
        if(el.info.lang === "Kor"){
          if(el.info.horizontalBanner){
            let item = {name: 'item'+index, banner: el.info.horizontalBanner, link: "https://ktestone.com/kapable.github.io/" + el.info.mainUrl + "/"}
            _list.push(item)
          }
        }
      })
    }
    _list[0].name = "item1";
    _list = _list.slice(undefined, 5);

    // change display style in condition of screen width size
    let _menuStyle = {}
    let _wrapperStyle = {}
    if(window.window.screen.width >= 1800) {
      _menuStyle = {display: 'inline-block', alignItems: 'center', userSelect: 'none'};
      _wrapperStyle={overflow: 'none', userSelect: 'none'}
    } else {
      _menuStyle = {display: 'flex', alignItems: 'center', userSelect: 'none'};
      _wrapperStyle={overflow: 'hidden', userSelect: 'none'}
    };

    this.state = {
      current_test: this.props.test,
      current_lang: '',
      list: _list,
      alignCenter: true,
      clickWhenDrag: false,
      dragging: true,
      hideArrows: true,
      hideSingleArrow: true,
      itemsCount: _list.length,
      scrollToSelected: false,
      selected: "item1",
      translate: 0,
      transition: 0.3,
      wheel: false,
      inertiaScrolling: true,
      inertiaScrollingSlowdown: 1,
      menuStyle:_menuStyle,
      wrapperStyle:_wrapperStyle
    }
    this.menu = null;
    this.Menu = this.Menu.bind(this)
    this.menuItems = this.Menu(this.state.list.slice(0, this.state.list.length), this.state.selected);
    
  }
  _eventSenderGA(category, action, label){
    ReactGA4.event({
        category: category,
        action: action,
        label: label
      });
  }
  _onPPLBannerClick(){
    this._eventSenderGA("Outlinking", "Click NewTest-Banner Button", "result page");
  }
  // // All items component
  // // Important! add unique key
  Menu = (list, selected) => 
    list.map(el => {
      const {name, banner, link} = el;

      // One item component
      // selected prop will be passed
      return <div
      className={`menu-item ${selected ? 'active' : ''}`} key={name}
      ><a target="_blank"
      rel="noopener noreferrer"
      href={link}
      ><img loading="lazy" src={banner} alt={name} style={{width:'13rem'}} onClick={this._onPPLBannerClick} /></a></div>
    });

  onLastItemVisible = () => {
    console.log("last item is visible");

    const newItems = Array(5)
      .fill(1)
      .map((el, ind) => ({ name: `item${this.state.list.length + ind + 1}` }));
    let list_ = this.state.list.concat(newItems);
    this.menuItems = this.Menu(list_, list_.slice(-1)[0].name);
    this.setState({
      itemsCount: list_.length,
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
    const { itemsCount = this.state.list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= this.state.list.length && val >= 0
        ? +ev.target.value
        : this.state.list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = this.Menu(this.state.list.slice(0, itemsCountNew), selected);
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
        wheel,
        inertiaScrolling,
        inertiaScrollingSlowdown,
        menuStyle,
        wrapperStyle
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
          inertiaScrolling={inertiaScrolling}
          inertiaScrollingSlowdown={inertiaScrollingSlowdown}
          menuStyle={menuStyle}
          wrapperStyle={wrapperStyle}
        />
      </div>
    );
  }
}

export default horizontalScrolling;