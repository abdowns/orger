import './NavSection.css'

export default function NavSection({title}){
    return (
        <div className="section">
            <p className="title"> {title} </p>

            <div className="list">
                <NavItem/>
                <NavItem/>
                <NavItem/>
            </div>
        </div>
    );
}

function NavItem(){
    return (
        <div className="item">
            <div className="item-icon"></div>

            <p className="item-title"> Title </p>
        </div>
    );
}