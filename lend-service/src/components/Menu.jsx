import React from "react";

const Menu = ({items}) => {
    return (
        <div className='section-center'>
            {
                items.map((menuItem)=>{
                    const {id, title, img, status} = menuItem;
                    return(
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} className='photo' />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                </header>
                                <p className='item-text'>{status}</p>
                            </div>                       
                        </article>

                        
                    )
                })
            }
            
        </div>
    )
}

export default Menu

function MyButton() {
    return <button>This is my button component</button>
  }