import React from 'react';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {n: 1, m: 1,array:[1,2,3,4,5,6]}
    }

    onClick = () => {
        this.setState(state => ({n: state.n - 1}));
        this.setState(state => ({n: state.n + 1}));
    };
    onClick2 = () => {
        this.setState(state => ({m: state.m + 1}));
    };
    // shouldComponentUpdate(newProps, newState) {
    //     return newState.n !== this.state.n;
    // }    / 如果值不变，会自动匹配到值不变，不更新传入B的UI，这样做节省了2个更新步骤。React.PureComponent内置了这个功能

    render() {
        console.log('render了一次')
        // let result = [] /for循环没有返回值，我们要给他一个结果
        // for (let i=0;i<this.state.array.length;i++){
        //     result.push(this.state.array[i]) /最后return result就行了
        //} /但是一般都用更高级的map ↓ ↓ 在return后面
        return (
            // 由于只能有一个根元素，所以为了方便用Fragment来占位。可简写为<>!!!
            <React.Fragment>
                <div>hi</div>
                <div className="App">
                    m:{this.state.m}
                    {this.state.n % 2 === 0 ?
                    <div>偶数</div> : <span>奇数</span>}
                    {/*{this.state.n % 2 === 0 && <div>偶数</div>}*/}
                    <button onClick={this.onClick2}>m+1</button>
                    <B name={this.state.n}/>
                    <button onClick={this.onClick}>n+1-1</button>
                </div>
                {/*{result} / for循环返回的result*/}
                {this.state.array.map(n=><div key={n}>{n}</div>)}
                {/*每个数都用div包起来,循环都要写key=自己的对象，不然warning*/}
            </React.Fragment>
        );
    }
}

class B extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps)
    } // 这个写法过时了，会报错！！！

    render() {
        return (//读出传入的外部数据this.state.x
            <div>n:{this.props.name}</div>//UI在B里刷新 /值不变且直接跳过了刷新
        )
    }
}

export default App;
