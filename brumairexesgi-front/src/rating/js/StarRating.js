import React from 'react'
import {FaStar} from 'react-icons/fa'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai'

const StarRating = () => {
  return <div class={"rating"}>
            <div class={"average-rating"} >
                {Array(5).fill().map((_,index) => (
                    <AiOutlineStar style={{color:'orange'}}/>
                    )
                )}
              <span className={"rating-title"}>  Evaluations Global</span>
            </div>
        </div>
}

export default StarRating