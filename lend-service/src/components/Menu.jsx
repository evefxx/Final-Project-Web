import React from "react";

const Menu = ({items}) => {
    return (
        <div className='section-center'>
            {
                items.map((menuItem)=>{
                    const {id, title, count, img, status} = menuItem;
                    return(
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} className='photo' />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                </header>
                                <h10 className="count">{count}</h10>
                                <p className='item-text'>{status}</p>
                                <MyButton/>
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
    return <button>Lend</button>
  }
