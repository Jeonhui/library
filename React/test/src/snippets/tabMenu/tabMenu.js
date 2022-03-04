import "./tabMenu.css"
import {useState} from "react";

export default function TabMenu() {
    const [select, setSelect] = useState(0);

    // tab메뉴 변경시
    const onChangeRadio = (e) => {
        console.log(e.target.value);

    }

    return (<div className={"tab"}>
            <form className={"tabContainer"} onChange={onChangeRadio}>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"clothes"} id={"b0"} checked/><label
                htmlFor={"b0"} className={"tabList"} style={{borderRadius: "5px 0 0 0"}}>clothes</label>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"clothes_wm"} id={"b1"}/><label
                htmlFor={"b1"} className={"tabList"}>clothes(women)</label>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"shoes"} id={"b2"}/><label
                htmlFor={"b2"} className={"tabList"}>shoes</label>
                <input className={"radioBtn"} type={"radio"} name={"choose"} value={"bed"} id={"b3"}/><label
                htmlFor={"b3"} className={"tabList"} style={{borderRadius: "0 5px 0 0"}}>bed</label>
            </form>
        </div>
    );
}