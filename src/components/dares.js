import React from 'react'

function Dares(props) {
    const {title,type, open, remove, questions} = props;
  return (
      <div>
    <div className="container">
        <div className="dare-container">
            <h1>
                {title}
            </h1>
            <div onClick={()=>open(type)} className="dare-button smaller-button">
                +
            </div>
            
        </div>
        
        <div>

        </div>
        
    </div>
    <div className="container wrap">
        {questions && questions.map((item, index) => {
            
            return <div onClick={()=>remove(index, type)} key={index} className="item">{item}</div>
        })}
    </div>

    </div>
  )
}

export default Dares