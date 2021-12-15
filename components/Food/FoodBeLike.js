
import React from 'react'
import data from '../../utils/data';
import { Card} from 'antd'
import { formatPrice } from '../../utils/helper';

function FoodBeLike() {
	return (
		<div className="food__belike">
			<div className="food__belike__title">
				<h2>MÓN ĐƯỢC YÊU THÍCH</h2>
			</div>
			<div className="food__belike__content">
            {data.foods.filter(item=> item.category==="mon-yeu-thich").map(food => {
                return (
                  <div key={food.name}>
                    <Card
                      hoverable
                      cover={<img alt="Modern Design" src="/images/mon-an/bo-luc-lac.jpg" />}
                    >
                      <h3>{food.name}</h3>
                      <div className="price">
                          {food && food.prices.map((item) => {
                            return (
                              <p key={item.id}>
                                <span className="food__size">{item.size}</span>
                                <span>{formatPrice(item.price)}</span>
                              </p>
                            )
                          }
                            )
                          }
                          
                      </div>
                    </Card>
               </div>
            )})
            }
   
			</div>
		</div>
	)
}

export default FoodBeLike
