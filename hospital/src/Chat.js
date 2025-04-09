import React, {Component}  from "react";
import {COMETCHAT_CONSTANTS} from "./CONSTS"


export default class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: undefined,
        };

    }

    componentDidMount(){
        this.init();
    }

    init(){
        CometChat.init(
            COMETCHAT_CONSTANTS.APP_ID,
            new CommetChat.AppSettingsBuilder()
                .setReg
        )
    }
}

