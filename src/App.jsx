import React from 'react';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    
    super(props)
    
    this.stocks = [
    {
        name:"BPX",
        price:"21"
    },{
        name:"LMR",
        price:"3"
    },{
        name:"RTX",
        price:"3090"
    }];
    
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
    	const resizable = function (resizer) {
    		const direction = resizer.getAttribute('data-direction') || 'horizontal';
    		const prevSibling = resizer.previousElementSibling;
    		const nextSibling = resizer.nextElementSibling;
    
    		let x = 0;
    		let y = 0;
    		let prevSiblingHeight = 0;
    		let prevSiblingWidth = 0;
    
    		const mouseDownHandler = function (e) {
    			x = e.clientX;
    			y = e.clientY;
    			const rect = prevSibling.getBoundingClientRect();
    			prevSiblingHeight = rect.height;
    			prevSiblingWidth = rect.width;
    
    			document.addEventListener('mousemove', mouseMoveHandler);
    			document.addEventListener('mouseup', mouseUpHandler);
    		};
    
    		const mouseMoveHandler = function (e) {
    			const dx = e.clientX - x;
    			const dy = e.clientY - y;
    
    			switch (direction) {
    				case 'vertical':
    					const h =
    						((prevSiblingHeight + dy) * 100) /
    						resizer.parentNode.getBoundingClientRect().height;
    					prevSibling.style.height = `${h}%`;
    					break;
    				case 'horizontal':
    				default:
    					const w =
    						((prevSiblingWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
    					prevSibling.style.width = `${w}%`;
    					break;
    			}
    
    			const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    			resizer.style.cursor = cursor;
    			document.body.style.cursor = cursor;
    
    			prevSibling.style.userSelect = 'none';
    			prevSibling.style.pointerEvents = 'none';
    
    			nextSibling.style.userSelect = 'none';
    			nextSibling.style.pointerEvents = 'none';
    		};
    
    		const mouseUpHandler = function () {
    			resizer.style.removeProperty('cursor');
    			document.body.style.removeProperty('cursor');
    
    			prevSibling.style.removeProperty('user-select');
    			prevSibling.style.removeProperty('pointer-events');
    
    			nextSibling.style.removeProperty('user-select');
    			nextSibling.style.removeProperty('pointer-events');
    
    			document.removeEventListener('mousemove', mouseMoveHandler);
    			document.removeEventListener('mouseup', mouseUpHandler);
    		};
    
    		resizer.addEventListener('mousedown', mouseDownHandler);
    	};
    
    	document.querySelectorAll('.resizer').forEach(function (ele) {
    		resizable(ele);
    	});
    });
  }

  render(){
    return (
      <div className="container unselectable">
         <div className="container__left" style={{width:'35%',minWidth: '10%',maxWidth:'60%'}}>
            <div id="stocks">
              
               Stocks:
              
              {this.stocks.map((v) => <p>{v.name} : {v.price}</p>)}
              
            </div>
         </div>
         <div className="resizer" data-direction="horizontal"></div>
         <div className="container__right" style={{minWidth: '10%'}}>
            <div className="container__top" style={{width:'100%',minHeight: '20%'}}>
               <div id="graph">
                  Graph
               </div>
            </div>
            <div className="resizer" data-direction="vertical"></div>
            <div className="container__bottom" style={{width:'100%',minHeight: '20%'}}>
               <div className="container__left" style={{width:'50%',minWidth: '30%'}}>
                  <div id="stock_info">
                     Stock Info
                  </div>
               </div>
               <div className="resizer" data-direction="horizontal"></div>
               <div className="container__right" style={{width:'50%',minWidth: '30%'}}>
                  <div id="stock_actions">
                     Stock Actions
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;