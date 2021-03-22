import React from 'react';
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const {useState} = React;

const slide = ["/", "/basket"];

const NavButtons = () => {

    const [current, setSelected] = useState(window.location.pathname);

    let history = useHistory();

    const handleClickNext = () => {
        setSelected(e => {

            let push = "/";
            if (e === slide[slide.length - 1]) {
                push = slide[slide.length - 1]
            } else {
                push = slide[slide.indexOf(e) + 1];
            }

            setTimeout(() => history.push(push));
            return push;
        });
    }

    const handleClickPrev = () => {
        setSelected(e => {
            
            if (e === slide[0]) {
                return slide[0]
            } else {
                return slide[slide.indexOf(e) - 1];
            }

        });

        history.goBack();
    }

    return ( 
        <div>
            <div className="page-next">
                <button className={clsx({ 'd--none': current === slide[slide.length - 1] })} onClick={handleClickNext}> 
                    <div>Next</div>
                </button>
            </div>
            <div className="page-prev">
                <button className={clsx({ 'd--none': current === slide[0] })} onClick={handleClickPrev}> 
                    <div>Prev</div>
                </button>
            </div>

        </div>
    );
}
 
export default NavButtons;