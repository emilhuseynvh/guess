import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import MiniCart from './Cart/MiniCart';
import { useGetAllCategoriesQuery, useGetCartQuery, useGetProductBySubcategoryIdMutation, useSearchProductByInputMutation } from '../../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import HamburgerMenu from './HamburgerMenu';
import { MdClose } from 'react-icons/md';
import Loader from './Loader';

const Header = ({ checkout }) => {
  const listImage = ['assets/img/header-list1.webp', 'assets/img/header-list2.webp', 'assets/img/header-list3.webp' ,'assets/img/header-list4.webp',]

  const [search, setSearch] = useState(false)
  const [cart, setCart] = useState(false)
  const [showHamburger, setShowHamburger] = useState(false)
  const [closeSearch, setCloseSearch] = useState(false)
  const [input, setInput] = useState()
  const like = useSelector((state) => state.like.like);

  const navigate = useNavigate();

  const { data: allCategories, isLoading: caregoryLoader } = useGetAllCategoriesQuery();
  const { data: products } = useGetCartQuery();
  const [inputValue, { data: searchData, error: searchError }] = useSearchProductByInputMutation()

  useEffect(() => {
    if (input) {
      inputValue(input)
      setCloseSearch(false)
    }
    else {
      setCloseSearch(true)
    }
  }, [input])


  const handleSubcategoryFilter = (id) => {
    navigate({ pathname: '/products/all', search: `?subcategoryId=${id}`, })
  };

  const handleCategoryFilter = (id) => {
    navigate({ pathname: '/products/all', search: `?categoryId=${id}`, })
  };


  const handleClick = () => {
    const token = localStorage.getItem('token')
    token ? setCart(!cart) : navigate('/login')
  }

  return caregoryLoader ? (
    <Loader />
  ) : (
    <header className={`${showHamburger && 'fixed inset-0 bg-white z-50'} border-b-2 border-[#eee]`}>
      <div className={`flex ${checkout ? 'w-[80%]' : 'w-[95%]'} mx-auto h-[58px] items-center justify-between`}>
        <div className='flex items-center'>
          <svg className='cursor-pointer' onClick={() => navigate('/')} width="114px" height="20px" viewBox="0 0 114 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>guess_logo</title><desc>Created with Sketch.</desc><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Tablet-nav/Nav-bar" transform="translate(-16.000000, -18.000000)" fill="#221F1F"><g id="Tablet-nav/Nav-content"><g id="Main-Nav" transform="translate(16.000000, 18.210526)"><g id="guess_logo-Copy-1" transform="translate(0.500000, 0.105263)"><g id="guess_logo/simple"><path d="M0.36592766,10.0327917 C0.366889362,13.0371667 1.43870638,15.4675 3.55060426,17.2562292 C5.45958298,18.8719792 7.83306383,19.6918333 10.6046894,19.6918333 C12.1025404,19.6918333 13.6821362,19.4139167 15.2992383,18.8667083 C17.4669149,18.1316667 17.9107404,17.6917917 17.9107404,17.2591042 L17.9107404,11.8320625 C17.9107404,11.0591667 18.0617277,10.5359167 18.3531234,10.3140625 C18.4483319,10.237875 18.7281872,10.10275 19.5321702,10.0495625 L19.8437617,10.0294375 L19.8437617,8.87416667 L12.1227362,8.87416667 L12.1227362,10.0303958 L12.4352894,10.0500417 C13.6653064,10.1262292 14.0793191,10.3375417 14.2168426,10.4568542 C14.3178213,10.5455 14.5548809,10.8909792 14.5548809,12.1962292 L14.5548809,16.5897083 C14.5548809,16.8000625 14.5072766,16.9524375 14.4135106,17.0434792 C14.3567702,17.097625 14.1365404,17.2538333 13.3109191,17.5240833 C12.9247957,17.6520208 12.5131872,17.7468958 12.0861915,17.8058333 C11.6543872,17.8666875 11.2745149,17.896875 10.9561915,17.896875 C9.08856596,17.896875 7.49694894,17.2111875 6.22702128,15.8608958 C4.95084255,14.5038958 4.30313617,12.5771667 4.30313617,10.1358125 C4.30313617,7.1630625 4.95084255,5.01064583 6.22654043,3.7389375 C7.50175745,2.46770833 8.99720426,1.82322917 10.6724894,1.82322917 C12.3400809,1.82322917 13.6532851,2.3531875 14.6837489,3.43897917 C15.2588468,4.0638125 15.8291362,5.03747917 16.3787489,6.33314583 L16.4653021,6.5363125 L17.6669489,6.5363125 L17.4260426,0.0675625 L16.272,0.0675625 L16.1873702,0.2745625 C16.0887957,0.514625 15.9738723,0.696708333 15.8450043,0.8150625 C15.7873021,0.867770833 15.6300638,0.9559375 15.2271106,0.9559375 C15.1780638,0.954979167 14.9097489,0.917604167 13.534034,0.525166667 C12.4723149,0.220895833 11.3778979,0.0675625 10.279634,0.0675625 C7.22959574,0.0675625 4.7450383,1.12460417 2.89568511,3.20897917 C1.21799574,5.09258333 0.366889362,7.38539583 0.36592766,10.0217708 L0.36592766,10.0327917 Z M43.1232043,16.5700625 C43.7334043,15.4574375 44.0421106,13.9039792 44.0421106,11.9532917 L44.0421106,4.77585417 C44.0421106,2.99383333 44.3036936,2.40925 44.4594894,2.22045833 C44.6450979,1.99477083 45.122583,1.69816667 46.3391362,1.56495833 L46.636783,1.53333333 L46.636783,0.390520833 L39.5644255,0.390520833 L39.5644255,1.53620833 L39.8654383,1.5654375 C40.773766,1.65504167 41.4113745,1.86779167 41.7090213,2.18308333 C41.8778,2.36133333 42.1590979,2.93489583 42.1590979,4.77633333 L42.1590979,11.9537708 C42.1590979,13.6524167 41.9528128,14.9150208 41.5469745,15.7070833 C40.8271404,17.1076875 39.4350766,17.7885833 37.29,17.7885833 C35.3459191,17.7885833 34.0687787,17.1258958 33.3869319,15.7660208 C33.0147532,15.0084583 32.8262596,13.92075 32.8262596,12.5326042 L32.8262596,3.71210417 C32.8262596,2.51658333 33.0527404,2.1346875 33.1888213,2.0139375 C33.3330766,1.88408333 33.767766,1.65408333 35.0554851,1.56639583 L35.3665957,1.54483333 L35.3665957,0.390520833 L26.8488,0.390520833 L26.8488,1.5424375 L27.1565447,1.56591667 C28.4197404,1.6631875 28.8481787,1.89558333 28.9909915,2.0254375 C29.1241872,2.14666667 29.3487447,2.527125 29.3487447,3.71210417 L29.3487447,12.3303958 C29.3487447,14.0860625 29.6584128,15.527875 30.2686128,16.6122292 C31.4077489,18.6549167 33.5614809,19.6913542 36.6687404,19.6913542 C39.8125447,19.6913542 41.9840681,18.6410208 43.1232043,16.5700625 L43.1232043,16.5700625 Z M70.625,13.9772917 L69.2055277,13.9772917 L69.1160894,14.17375 C68.442417,15.6615625 67.687,16.6055208 66.8734,16.9773542 C66.0290255,17.3635625 64.6787957,17.5600208 62.8582936,17.5600208 C60.7473574,17.5600208 60.0462766,17.4862292 59.8294128,17.4244167 C59.7606511,17.4042917 59.551,17.3443958 59.551,16.7741875 L59.551,10.2790833 L63.4877277,10.2790833 C64.8903702,10.2790833 65.3418894,10.5378333 65.4875872,10.6926042 C65.6794468,10.8967292 65.9588213,11.40225 66.2002085,12.6490417 L66.2521404,12.9183333 L67.5100468,12.9183333 L67.5100468,5.88464583 L66.250217,5.88464583 L66.2002085,6.15633333 C65.9698809,7.39545833 65.6914681,7.90145833 65.4996085,8.10797917 C65.3548723,8.2641875 64.9009489,8.52389583 63.4872468,8.52389583 L59.5505191,8.52389583 L59.5505191,2.70297917 C59.5505191,2.28514583 59.6207234,2.17589583 59.6188,2.17589583 C59.6192809,2.17541667 59.7140085,2.1059375 60.1111915,2.1059375 L63.8786596,2.1059375 C65.7953319,2.1059375 66.5319957,2.36085417 66.8108894,2.57360417 C67.0859362,2.78347917 67.4701362,3.32829167 67.7413362,4.73129167 L67.7927872,5.00058333 L69.1122426,5.00058333 L69.0016468,0.390520833 L53.6403787,0.390520833 L53.6403787,1.54435417 L53.9500468,1.56591667 C55.1824681,1.65264583 55.5897489,1.89127083 55.7229447,2.026875 C55.8532553,2.15864583 56.0734851,2.55395833 56.0734851,3.71210417 L56.0734851,15.97925 C56.0734851,17.2423333 55.8393106,17.5763125 55.7383319,17.661125 C55.5988851,17.779 55.1786213,17.9965417 53.9389872,18.1273542 L53.6408596,18.1580208 L53.6408596,19.3013125 L69.1891787,19.3013125 L70.625,13.9772917 L70.625,13.9772917 Z M89.1747915,0.253958333 C89.1146851,0.50025 89.034383,0.6885625 88.9353277,0.811229167 C88.8742596,0.885979167 88.7102894,0.929104167 88.4958298,0.929104167 C88.4496681,0.925270833 88.2140511,0.8811875 87.0758766,0.483958333 C86.1588936,0.163875 85.356834,0.000958333333 84.691817,0.000479166667 L84.6817191,0.000479166667 C83.0689447,0.0014375 81.7504511,0.500729167 80.7637447,1.4849375 C79.7751149,2.47010417 79.2740681,3.71785417 79.2740681,5.1936875 C79.2740681,6.3235625 79.6981787,7.36766667 80.5382255,8.30060417 C80.979166,8.77833333 81.5739787,9.25414583 82.3077574,9.7175 L84.6672936,11.1847083 C85.9987702,12.0122292 86.8768043,12.6346667 87.2754298,13.0333333 C87.8663957,13.6394792 88.1520213,14.3304375 88.1520213,15.1455 C88.1520213,16.0492083 87.8745702,16.7291458 87.3023574,17.2231667 C86.7162,17.7310833 86.0386809,17.977375 85.2327745,17.977375 C83.6935702,17.977375 82.4395106,17.3856042 81.3989489,16.169 C80.7974043,15.464625 80.2626979,14.5010208 79.8111787,13.3050208 L79.729434,13.0893958 L78.480183,13.0893958 L79.397166,19.6257083 L80.5805404,19.6257083 L80.6247787,19.3453958 C80.6545915,19.159 80.7146979,18.9884167 80.8089447,18.8240625 C80.8575106,18.7387708 80.979166,18.6956458 81.1666979,18.6946875 C81.2143021,18.6994792 81.4604979,18.7445208 82.6659915,19.161875 C83.629617,19.4968125 84.5682383,19.6659583 85.4592553,19.6659583 C87.2369617,19.6659583 88.7237532,19.1479792 89.8753915,18.126875 C91.0395319,17.0961875 91.630017,15.7938125 91.630017,14.2561667 C91.630017,13.1095208 91.2958255,12.0984792 90.6346553,11.2479583 C89.9893532,10.4405625 88.8766638,9.55075 87.329766,8.60104167 L84.8981021,7.10508333 C84.0253574,6.57033333 83.3757277,6.05475 82.9665234,5.56935417 C82.5847277,5.1246875 82.3996,4.60095833 82.3996,3.9675 C82.3996,3.27845833 82.6342553,2.75760417 83.1179915,2.37666667 C83.6238468,1.9765625 84.2047149,1.7825 84.8904085,1.7825 C85.7891191,1.7825 86.7181234,2.11504167 87.6500128,2.77102083 C88.5737277,3.42125 89.260383,4.60335417 89.6883404,6.28475 L89.7513319,6.53535417 L91.0433787,6.53535417 L90.3673021,0 L89.2363404,0 L89.1747915,0.253958333 Z M108.333821,8.60104167 L105.9036,7.10460417 C105.029413,6.57033333 104.379783,6.05379167 103.970579,5.56935417 C103.588783,5.1246875 103.403174,4.60095833 103.403174,3.9675 C103.403174,3.27797917 103.638311,2.75760417 104.122047,2.37666667 C104.627421,1.9765625 105.207809,1.78202083 105.894464,1.78202083 C106.792694,1.78202083 107.722179,2.11504167 108.65503,2.77102083 C109.578745,3.42125 110.264438,4.60335417 110.693357,6.28475 L110.756349,6.53535417 L112.047915,6.53535417 L111.371357,0 L110.241357,0 L110.178847,0.253479167 C110.11874,0.50025 110.037477,0.687604167 109.939383,0.81075 C109.877834,0.885979167 109.714345,0.929104167 109.499404,0.929104167 C109.453723,0.925270833 109.218587,0.8811875 108.079451,0.483479167 C107.160064,0.1624375 106.357523,0 105.692026,0 C104.076366,0 102.75643,0.499291667 101.767319,1.48445833 C100.778689,2.469625 100.277643,3.71785417 100.277643,5.19320833 C100.277643,6.32308333 100.702234,7.3671875 101.5418,8.300125 C101.98274,8.777375 102.578034,9.2531875 103.311332,9.71702083 L105.670868,11.1842292 C107.002345,12.0112708 107.88086,12.6341875 108.279485,13.032375 C108.869489,13.639 109.156557,14.3294792 109.156557,15.1440625 C109.156557,16.04825 108.878626,16.7281875 108.305932,17.2217292 C107.720255,17.730125 107.043698,17.9764167 106.23683,17.9764167 C104.697626,17.9764167 103.442604,17.3846458 102.402523,16.1675625 C101.800979,15.4636667 101.266272,14.5005417 100.814272,13.3035833 L100.733489,13.0879583 L99.4837574,13.0879583 L100.401221,19.6242708 L101.584115,19.6242708 L101.629315,19.3439583 C101.659128,19.1575625 101.718753,18.9869792 101.812038,18.822625 C101.861085,18.7368542 101.983702,18.6942083 102.170272,18.69325 C102.216915,18.6980417 102.464553,18.7430833 103.669566,19.1604375 C104.633191,19.495375 105.572294,19.6645208 106.461868,19.6645208 C108.241017,19.6645208 109.727809,19.1465417 110.878966,18.1254375 C112.043106,17.09475 112.633591,15.7918958 112.633591,14.2547292 C112.633591,13.1080833 112.2994,12.0970417 111.63823,11.247 C110.993889,10.4410417 109.881681,9.55027083 108.333821,8.60104167 Z" id="Shape" fillRule="nonzero"></path></g></g></g> </g></g></g></svg>
          <ul className={`${checkout ? 'hidden' : 'hidden base:flex'} text-[13px]  ml-12 font-medium `}>
            {allCategories && allCategories.map((item, i) => {
              return (
                <div key={i} className='group'>
                  <li key={i} className={`py-[18px] mx-3 cursor-pointer tracking-[.2em]`}>{item.name}</li>
                  <div className='absolute w-screen left-0 z-40 bg-white hidden group-hover:flex justify-between px-24'>
                    <div>
                      <p onClick={() => handleCategoryFilter(item.id)} className='cursor-pointer hover:underline text-xs font-semibold my-4'>View all</p>
                      {item.Subcategory.length > 0 && item.Subcategory.map((item, i) => {
                        return <p key={i} onClick={() => handleSubcategoryFilter(item.id)} className='my-4 cursor-pointer hover:underline'>{item.name}</p>
                      })}
                    </div>
                    <div className='w-96 h-96 ml-40'>
                      <img src={`./../../../../assets/img/header-list${i + 1}.${i === 4 ? 'jpg' : 'webp' }`} alt="Category Image" />
                    </div>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
        {/* REGISTER LOGIN SECTION START */}
        <div className='flex'>
          <div className='relative group'>
            <p className={`${checkout ? 'hidden' : 'hidden base:block'} text-[.81rem] font-medium pr-4 mr-4 border-r-[1px] border-r-[#eee] select-none `}>Hi, <Link to={!localStorage.getItem('username') && '/login'} className='font-normal underline cursor-pointer'>{localStorage.getItem('username') ? localStorage.getItem('username') : 'Sign-in or register'}</Link></p>
            <ul className={`${localStorage.getItem('username') && 'group-hover:block'} hidden absolute bg-white px-4 z-10 py-2 text-xs`}>
              <li onClick={() => navigate('/account')} className='my-1 cursor-pointer hover:underline'>My Account</li>
              <li onClick={() => { localStorage.removeItem('username'); localStorage.removeItem('token'); localStorage.removeItem('user');  location.reload() }} className='my-1 cursor-pointer hover:underline'>Sign-out</li>
            </ul>
          </div>
          {/* REGISTER LOGIN SECTION END */}
          <svg onClick={() => navigate('/store-locator')} aria-hidden="true" focusable="false" role="presentation" className={`${checkout ? 'hidden' : 'block'} mr-3 icon icon-pin icon--stroke-based cursor-pointer`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <div className="md:relative">
            <div className={`${checkout ? 'hidden' : 'block'} md:relative `}>
              <IoSearch className={`${search ? 'block' : 'hidden'} absolute left-2 md:left-[-30px] md:hidden z-40 top-[70px] md:top-1/2 -translate-y-1/2 text-[#979797] w-5 h-5 cursor-pointer`} />
              <input onChange={(e) => setInput(e.target.value)} className={`${search ? 'block' : 'hidden'} outline-none border-b-[1px] z-30 absolute  top-[58px] pb-2 md:top-0 left-0 md:left-[-440px] w-[100vw] md:w-[430px] md:pl-1 pl-10`} placeholder='Search' type="text" />
              <IoMdClose onClick={() => setSearch(!search)} className={`${search ? 'block' : 'hidden'} absolute right-[18px] md:left-[-30px] z-40 top-[64px] md:top-1/2 text-[#979797] w-6 h-6 cursor-pointer`} />
              <ul className={`${search ? 'block' : 'hidden'} ${closeSearch ? 'hidden' : 'block'} absolute left-0 md:-left-[440px] max-h-96 scroll z-40 w-[100vw] md:w-[435px] overflow-auto bg-white top-[90px] md:top-8 px-2 py-2`}>
                {searchData?.length > 0 ? (
                  searchData.map((item, i) => (
                    <li onClick={() => { navigate((`/products/all/details/${item.id}`)); setSearch(false) }} className='cursor-pointer border-b py-4 flex' key={i}>
                      <img className='w-16' src={item.images[0]} alt="" />
                      <div>
                        <p className='text-sm pl-3 my-1'>{item.name}</p>
                        <div className='flex pl-[10px] items-center gap-1'>
                          <p className={`${item.discount ? 'text-sm line-through' : 'text-base'} `}>{item.price}</p>
                          <p className='text-red-600'>{(item.price - (item.price / 100 + item.discount)).toFixed(2)}</p>
                        </div>
                        <div className='flex pl-3 gap-2 mt-2 items-center'>
                          <p>Colors:</p>
                          {item.Colors.map((item, i) => <div style={{ background: `${item}` }} className='rounded-[50%] w-4 h-4'></div>)}
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className='cursor-pointer py-1'>The product you are looking for was not found.</li>
                )}
              </ul>
            </div>
            <svg onClick={() => setSearch(!search)} aria-hidden="true" focusable="false" role="presentation" className={`${checkout ? 'hidden' : 'block'} mr-3 icon icon-search icon--stroke-based cursor-pointer`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6708 17.3415C14.3549 17.3415 17.3415 14.3549 17.3415 10.6708C17.3415 6.98661 14.3549 4 10.6708 4C6.98661 4 4 6.98661 4 10.6708C4 14.3549 6.98661 17.3415 10.6708 17.3415Z" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.0008 20L15.3854 15.3846" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          <div onClick={() => navigate('/wishlist')} className='flex items-center mr-3'>
            <svg aria-hidden="true" focusable="false" role="presentation" className={`${checkout ? 'hidden' : 'block'} icon icon-heart icon--stroke-based cursor-pointer`} data-modal-type="show-list-selection" data-variant-id="" data-product-id="" data-product-url="https://guess.com.au" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0057 19.5216L4.36699 12.6025C0.21554 8.45103 6.31817 0.48025 12.0057 6.92884C17.6931 0.48025 23.7681 8.47871 19.6443 12.6025L12.0057 19.5216Z" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" className="" data-modal-type="show-list-selection" data-variant-id="" data-product-id="" data-product-url="https://guess.com.au"></path></svg>
            <p className={`${checkout ? 'hidden' : 'block'} text-xs font-light ml-[3.5px] select-none`}>{like}</p>
          </div>
          <div className='md:relative'>
            <button onClick={() => handleClick()} className='mr-3 flex items-center'>
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-cart icon--stroke-based" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.492 18.8997C19.5121 19.0785 19.4941 19.2595 19.4392 19.4308C19.3843 19.6021 19.2937 19.7598 19.1735 19.8936C19.0529 20.0272 18.9055 20.1337 18.7407 20.2062C18.576 20.2786 18.3978 20.3154 18.2179 20.314H5.78211C5.60216 20.3154 5.42397 20.2786 5.25926 20.2062C5.09455 20.1337 4.94705 20.0272 4.82649 19.8936C4.70625 19.7598 4.6157 19.6021 4.5608 19.4308C4.5059 19.2595 4.48789 19.0785 4.50795 18.8997L5.62921 8.84662H18.3708L19.492 18.8997Z" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.81458 8.84663V6.93539C8.81458 6.09057 9.15018 5.28036 9.74756 4.68298C10.3449 4.0856 11.1552 3.75 12 3.75C12.8448 3.75 13.655 4.0856 14.2524 4.68298C14.8498 5.28036 15.1854 6.09057 15.1854 6.93539V8.84663" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <p className='text-xs font-light ml-[3px] select-none'>{products?.length}</p>
            </button>
            <MiniCart cart={cart} setCart={setCart} />
          </div>
          {!showHamburger ?
            (
              <svg onClick={() => setShowHamburger(!showHamburger)} aria-hidden="true" focusable="false" role="presentation" className={`${checkout ? 'hidden' : 'block'} base:hidden block cursor-pointer`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 6H21" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 18H21" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            ) : (
              <MdClose onClick={() => setShowHamburger(!showHamburger)} className={`${checkout ? 'hidden' : 'block'} base:hidden block w-6 h-6 cursor-pointer`} />
            )}
        </div>
      </div>
      <HamburgerMenu allCategories={allCategories} showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
    </header>
  )
}

export default Header