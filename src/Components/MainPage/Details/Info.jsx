import React, { useEffect, useState } from 'react'
import birbank from './../../../../public/assets/img/birbank.png'
import zip from './../../../../public/assets/img/zip.webp'
import { useAddToCartMutation } from '../../../redux/api'

const Info = ({ product }) => {
    const { id, price, name, description, Size } = product
    console.log(id);

    const [quant, setQuant] = useState(1)
    const [color, setColor] = useState(product?.Colors[0])
    const [size, setSize] = useState(product?.Size[0])
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || []
        if (likedItems.includes(id)) {
            setLiked(true)
        }
    }, [id])

    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || []
        if (likedItems.includes(id)) {
            setLiked(true)
        }
    }, [id])

    const [addToCart, { data, error }] = useAddToCartMutation()

    const handleClick = () => {
        addToCart({ productId: id, count: Number(quant), color, size });
    };

    const handleLike = () => {
        let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
        if (liked) {
            likedItems = likedItems.filter(itemId => itemId !== id);
            wishlist = wishlist.filter(wishlistItem => wishlistItem.id !== id);
        } else {
            likedItems.push(id);
            wishlist.push(product); // Use product instead of item
        }
    
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
        setLiked(!liked);
    };
    



    const [info, setInfo] = useState(1)

    return (
        <div className='md:mt-0 mt-12 sticky h-[105vh] md:h-[130vh] top-2'>
            <p className='text-sm font-semibold'>{name}</p>
            <p className='mt-2 text-sm font-medium'>{price}</p>
            <div className='flex gap-4 items-center border-t border-b border-[#d8d8d8] py-3 justify-evenly'>
                <div className='px-3 flex flex-col items-center gap-2'>
                    <img className='h-6 ' src={birbank} alt="Birkart" />
                    <p className='tracking-[0] text-xs mt-1 whitespace-nowrap'>4 x {price}</p>
                </div>
                <div className='flex flex-col items-center gap-1 mb-2 px-5 border-r border-l border-[#d8d8d8]'>
                    <img className='h-10 ' src={zip} alt="" />
                    <p className='tracking-[0] text-xs whitespace-nowrap'>from $10/wk</p>
                </div>
                <div className='px-2 flex flex-col items-center gap-2'>
                    <svg className='h-6' xmlns="http://www.w3.org/2000/svg" width={100} height={40.4494} viewBox="0 0 100 40.4494"><defs><style>{".cls-1{fill:#ffb3c7;}"}</style> </defs> <g id="Lager_2" data-name="Lager 2"><g id="Layer_1" data-name="Layer 1"><rect className="cls-1" width={100} height={40.4494} rx={11.7384} /><path d="M80.0772,17.7235a6.194,6.194,0,1,0,0,10.2373v.75h3.5145V16.9727H80.0772Zm-3.1964,8.1388a3.0243,3.0243,0,1,1,3.1849-3.02A3.1059,3.1059,0,0,1,76.8808,25.8623Z" /><rect x={28.2027} y={11.7416} width={3.678} height={16.9694} /><path d="M64.1542,16.6569a4.2694,4.2694,0,0,0-3.62,1.6383V16.9733h-3.5V28.711h3.5421V22.5424a2.4754,2.4754,0,0,1,2.6383-2.6591c1.5447,0,2.4325.9228,2.4325,2.6348V28.711h3.5107V21.2464C69.1577,18.5146,66.9857,16.6569,64.1542,16.6569Z" /><path d="M43,17.7235a6.194,6.194,0,1,0,0,10.2373v.75h3.5145V16.9727H43Zm-3.1965,8.1388a3.0243,3.0243,0,1,1,3.1845-3.02A3.1058,3.1058,0,0,1,39.8034,25.8623Z" /><path d="M51.9513,18.5017V16.9728H48.353V28.7111h3.606v-5.48c0-1.8491,2.0042-2.843,3.3949-2.843.014,0,.0276.0014.0417.0015V16.9735A4.3821,4.3821,0,0,0,51.9513,18.5017Z" /><path d="M87.323,24.5476a2.2059,2.2059,0,1,0,2.206,2.2059A2.2057,2.2057,0,0,0,87.323,24.5476Z" /><path d="M25.6675,11.7384H21.8558a9.7488,9.7488,0,0,1-3.9412,7.8678l-1.51,1.131,5.8513,7.9792h4.8106l-5.3837-7.342A13.5049,13.5049,0,0,0,25.6675,11.7384Z" /><rect x={12.1204} y={11.7384} width={3.8185} height={16.9773} /></g></g></svg>
                    <p className='tracking-[0] text-xs mt-1 whitespace-nowrap'>4 x {price}</p>
                </div>
            </div>
            <div className='flex py-4 border-b border-[#eee] mb-4'>
                <p>Size:</p>
                <select onChange={(e) => setSize(e.target.value)} className='w-4/5 text-base outline-none mx-auto'>
                    {product.Size.map((item, i) => {
                        return <option key={i} >{item}</option>
                    })}
                </select>
            </div>
            <div className='flex py-4 border-b border-[#eee] mb-4'>
                <p>Qty:</p>
                <select onChange={(e) => setQuant(e.target.value)} className='w-4/5 text-base outline-none mx-auto'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <div className='flex py-4 border-b border-[#eee] mb-4'>
                <p>Color:</p>
                <select onChange={(e) => setColor(e.target.value)} className='w-4/5 text-base outline-none mx-auto'>
                    {product.Colors.map((item, i) => {
                        return <option key={i} value={item} className='flex gap-2'>{item}</option>
                    })}
                </select>
            </div>
            <button onClick={() => handleClick()} className='text-white bg-black w-full py-4 mt-2'>Add to bag</button>
            <div className='flex mt-5 mb-[15px] items-center justify-between'>
                <div onClick={() => handleLike()} className='flex items-center cursor-pointer'>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-heart icon--stroke-based w-6 h-6" data-modal-type="show-list-selection" data-variant-id="39975283261512" data-product-id="6770022023240" data-product-url="https://guess.com.au/products/eco-beige-treated-flower-jumper-m4gq14kc6v1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0057 19.5216L4.36699 12.6025C0.21554 8.45103 6.31817 0.48025 12.0057 6.92884C17.6931 0.48025 23.7681 8.47871 19.6443 12.6025L12.0057 19.5216Z" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" className="" data-modal-type="show-list-selection" data-variant-id="39975283261512" data-product-id="6770022023240" data-product-url="https://guess.com.au/products/eco-beige-treated-flower-jumper-m4gq14kc6v1"></path></svg>
                    <p className='pl-[5px] underline text-sm font-medium'>{liked ? 'Added to Wishlist' : 'Add to favourites' }</p>
                </div>
                <div className='flex items-center'>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-share icon--stroke-based" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.9998 10.1538H17.3845C16.65 10.1538 15.9457 10.4456 15.4263 10.9649C14.907 11.4843 14.6152 12.1886 14.6152 12.9231V16.3846" stroke="black" strokeWidth="1.71" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.8457 14.3077L24.9995 10.1538L20.8457 6" stroke="black" strokeWidth="1.71" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.2308 18.4615V25.3846C22.2308 25.7518 22.0849 26.104 21.8252 26.3637C21.5656 26.6233 21.2134 26.7692 20.8462 26.7692H8.38462C8.01739 26.7692 7.66521 26.6233 7.40554 26.3637C7.14588 26.104 7 25.7518 7 25.3846V14.3077C7 13.9405 7.14588 13.5883 7.40554 13.3286C7.66521 13.0689 8.01739 12.9231 8.38462 12.9231H10.4615" stroke="black" strokeWidth="1.71" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p className='pl-[5px] underline text-sm font-medium'>Share</p>
                </div>
            </div>
            <p className='text-xs font-medium'>Free shipping on orders $75+. Free returns and exchanges in-store.</p>
            <div className='border-b border-[#d9d9d9] mb-6 mt-5 flex text-sm justify-between mx-2'>
                <p onClick={() => setInfo(1)} className={`py-2 border-b-2 ${info === 1 ? 'border-black text-black' : 'border-transparent text-[#bfbfbf]'} font-medium cursor-pointer`}>Description</p>
                <p onClick={() => setInfo(2)} className={`py-2 border-b-2 ${info === 2 ? 'border-black text-black' : 'border-transparent text-[#bfbfbf]'} font-medium cursor-pointer`}>Shipping and returns</p>
            </div>
            <div className={`${info === 1 ? 'block' : 'hidden'}`}>
                <p className='text-sm font-medium'>{description}</p>
            </div>
            <div className={`${info === 2 ? 'block' : 'hidden'} pl-2 mb-4`}>
                <div>
                    <h2 className='text-sm font-semibold'>Shipping</h2>
                    <ul className='text-xs font-medium list-disc'>
                        <li className='my-2'>Free AU Standard shipping on orders over $75, otherwise $8</li>
                        <li className='my-2'>Free AU Express Shipping on orders over $150, otherwise $10</li>
                        <li className='my-2'>Free NZ Shipping on orders over $150</li>
                        <li className='my-2'>Find more info here</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-sm font-semibold'>Returns</h2>
                    <ul className='text-xs font-medium list-disc'>
                        <li className='my-2'>You can return your unworn, resellable product to our online or applicable retail store (excluding GUESS Factory Stores) for any reason within 30 days of receipt. Please note, due to hygiene reasons, we are unable to accept change-of-mind returns on underwear, swimwear, socks, earrings and fragrance. </li>
                        <li className='my-2'>Please note, fragrances are final sale and may not be returned, unless deemed faulty.</li>
                        <li className='my-2'>When returning items, you are responsible for the cost of the return unless your garment is damaged or faulty</li>
                        <li className='my-2'>Find more info on our returns policy and how it works here</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info