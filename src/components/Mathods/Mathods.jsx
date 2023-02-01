import React from 'react'
import './Mathods.css'
import Btc from '../../assets/img/btc.png'
import Chain from '../../assets/img/chain.png'
import Usdt from '../../assets/img/usdt.png'
import Dog from '../../assets/img/dog.png'
import EthBig from '../../assets/img/eth-big.png'
import Method from './Method'

function Mathods() {
    const methods = [
        { img: Btc, id: 1 },
        { img: Chain, id: 2 },
        { img: Usdt, id: 3 },
        { img: Dog, id: 4 },
        { img: EthBig, id: 5 },
    ]

    return (
        <div className='methods-main'>
            <div className="methods">
                {methods.map(item => <Method key={item.id} {...item} />)}
            </div>

        </div>
    )
}

export default Mathods