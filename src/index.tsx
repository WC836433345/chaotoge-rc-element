import * as React from 'react';
import * as ReactDom from 'react-dom';

import Dialog from './components/Dialog/DialogWrap';

import "./components/Dialog/styles/index.less";

interface isState{
    vasible?:boolean,
    vasible2?:boolean
}

class App extends React.Component<any,isState>{
    constructor(props:any){
        super(props);
        this.state={
            vasible:false,
            vasible2:false
        }
    }

    showDialog(){
        this.setState({vasible:true});
    }

    closeDialog(){
        this.setState({vasible:false});
    }
    showDialog2(){
        this.setState({vasible2:true});
    }

    closeDialog2(){
        this.setState({vasible2:false});
    }

    render(){
        const {vasible,vasible2} = this.state;
        return (
            <div className="app">
                <Dialog visible={vasible} onClose={this.closeDialog.bind(this)}></Dialog>
                <Dialog visible={vasible2} onClose={this.closeDialog2.bind(this)}></Dialog>
                <button onClick={this.showDialog.bind(this)}>显示dialog</button>
                <button onClick={this.showDialog2.bind(this)}>显示dialog2</button>
            </div>
        )
    }
}

ReactDom.render(<App></App>,document.getElementById('root'));
