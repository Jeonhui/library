import "./dropDown.css"

export function DropDown() {
    const MouseOver = () => {
        const menu = window.document.getElementById("dropDownMenu");
        menu.style.display = "block"
    }
    const MouseOut = () => {
        const menu = window.document.getElementById("dropDownMenu");
        menu.style.display = "none"
    }

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
