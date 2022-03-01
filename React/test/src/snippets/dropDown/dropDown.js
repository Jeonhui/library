import "./dropDown.css"

export function DropDown() {

    const MouseOver = () => {
        const menu = window.document.getElementById("dropDownMenu");
        menu.style.display = "block"
    } //mouseover시 나타내기
    const MouseOut = () => {
        const menu = window.document.getElementById("dropDownMenu");
        menu.style.display = "none"
    } //mouseout시 사라지기

    return (
        <div className="dropDown" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <div className="dropDownTitle">
                dropdown {/* 표시 */}
            </div>
            <ol id="dropDownMenu" className="dropDownMenu">
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ol>
        </div>
    );
}
