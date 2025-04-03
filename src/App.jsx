
import './App.css'
import { useState,useRef } from 'react'
import avatarPic from '../Image/avatar-cua-phuoc.jpg'
import logo1 from '../Image/logo-1.jpg'
import logo2 from '../Image/logo-2.png'
import logo3 from '../Image/logo-3.webp'//lần sau nên bỏ hình trong folder assets
import logo4 from '../Image/logo-4.webp'
import myData from './data.js'
import { EXAMPLES } from './data.js'
import Header from '../components/Header/Header.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import TabButton from '../components/LearnPropsChildren/learnPropsChildren.jsx'
import { ButtonKhanhNhan } from '../components/LearnPropsChildren/buttonKhanhNhan.jsx'
import Input from '../components/LearnPropsChildren/inputTypeText.jsx'

let today=new Date().toLocaleDateString();
let timenow=new Date().toLocaleTimeString()
const welcome=["Hello bạn đã đến với thế giới React","Mày là ai?","Tao là Tô Quý Phước đây"];
let rd=Math.floor(Math.random()*welcome.length);
console.log(rd);

const user={
  name:"Tô Quý Phước",
  age:25,
  gender:"male"
};
let hasGirlFriend=true;
function App() {
  const inputRef = useRef(null);

  const hanClick = () => {
    if (inputRef.current) {
      inputRef.current.changeState();
    }
  };

  {/*State là một hàm giúp thay đổi lại trang */}
  {/* Địt mẹ, ảo vãi loz, khó hiểu đcđ
    tham số trong useState là giá trị mặc định của biến noiDungTab
    sử dụng desturing*/}
   const[noiDungTab,hamThayDoiNoiDung]=useState();
   function handleClick(selectedButton){
    hamThayDoiNoiDung(selectedButton);{/*Ảo vcl chỉ cần lấy nội dung của tham số truyền vào là thay đổi được luôn giá trị biến noiDungTab */}
  }
  const[name,changeName]=useState("Tô Quý Phước");
  function clickChangeName(){
    if (name==="Tô Quý Phước")
    changeName("Nguyễn Khánh Nhân");
    else
    changeName("Tô Quý Phước");
  }
  const[loiChao,thayDoiLoiChao]=useState("Chào bạn");
  function clickLoiChao(){
    const currentHour=new Date().getHours();
    if (currentHour>=5&&currentHour<12)
      thayDoiLoiChao("Chào buổi sáng");
    else if(currentHour>=12&&currentHour<18)
      thayDoiLoiChao("Chào buổi chiều");
    else
      thayDoiLoiChao("Chào buổi tối");
  }

  const [isActivedButton,setActivedButton]=useState(true);
  const [isActivedDialog,setActiveDialog]=useState(false);
  
  function ActiveHandleButton(){
    setActiveDialog(true);
    setActivedButton(false);
  }
  function ActiveHandleDialog(){
    setActivedButton(false);
    setActiveDialog(false);
  }
  function CancelHandleDialog(){
    setActivedButton(true);
    setActiveDialog(false);
  }
      
  return (
    <>
      <Header></Header>
      <div class="profile">
        <h2>{welcome[rd]}</h2>
        <p>Hôm nay là ngày <strong>{today}</strong>
         .Thời gian hiện tại là <strong>{timenow}</strong>
        </p>
        <p>Họ và tên:{user.name}, tuổi:{user.age}, giới tính:{user.gender}</p>
        <p>Tình trạng: {hasGirlFriend?"đã có bạn gái":"chưa có bạn gái"}</p>
        <img src={avatarPic} alt="ảnh đại diện" />
        <ul class="ngonNguPhuocDung">
            <BaiTapProps image={logo1}
            title="Đây là ngôn ngữ C#"
            description="lorem idfcfsfgssfsfvsdfvsdgỵukjhgfgyjuikujhtgrfvsdvfcdvcvc"/>
            <BaiTapProps image={logo2}
            title="Đây là ngôn ngữ Java"
            description="lorem idfcfsfgssfsfvsdfvsdvsdtỵuikoiujytgrfertyikjhgvcfsrtfgerfev"/>
            <BaiTapProps image={logo3}
            title="Đây là ngôn ngữ JS"
            description="lorem idfcfsfgssfsfvsdfvsdvsdvfgdhyjuuiujyhtgrfdc ttrvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwfvervet"/>
            <BaiTapProps image={logo4}
            title="Đây là ngôn ngữ C++"
            description="lorem idfcfsfgssfsfvsdfvsdvsdvccdvdfgstrdyhgfdvcdfdfgfjghgfdtyulkjđẹtkhgfdbdkvncdddddddddddddddddddddddddddddscđfvdfvdvdfvvdfvdfbf"/>
        </ul>
        <div>
          {/* Tối ưu code Props */}
          <ul class="ngonNguPhuocDung">
            <HoatDong 
            image={myData[0].image}
            tenHoatDong={myData[0].tenHoatDong}
            thoiGianHoatDong={myData[0].thoiGianHoatDong}
            ngayHoatDongTrongTuan={myData[0].ngayHoatDongTrongTuan}>
            </HoatDong>
            {/* Hoặc là  */}
            <HoatDong {...myData[1]} />
            <HoatDong {...myData[2]} />
            <HoatDong {...myData[3]} />
          </ul>
          <ul class="ngonNguPhuocDung"> 
          <TabButton onSelect={()=>{handleClick("components")}}>Con mẹ nó</TabButton>
          <TabButton onSelect={()=>{handleClick("jsx")}}>Vcl</TabButton>
          <TabButton onSelect={()=>{handleClick("props")}}>Haha</TabButton>
          <TabButton onSelect={()=>{handleClick("state")}}>Mơ đi cưng</TabButton>
          </ul>
          {!noiDungTab?(<p>Xin vui lòng chọn 1 tab</p>):(
          <div id="tab-content">
            <h3>{EXAMPLES[noiDungTab].title}</h3>
            <p>{EXAMPLES[noiDungTab].desc}</p>
            <pre>
              <code>{EXAMPLES[noiDungTab].code}</code>
            </pre>
          </div>
          )}
        </div>
        <button onClick={clickLoiChao}>Click vào để thay đổi lời chào</button>
        <br></br>
        {loiChao}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <button onClick={()=>{clickChangeName("Nguyễn Khánh Nhân")}}>Bấm vào đây để thay đổi tên</button> */}
      <ButtonKhanhNhan onSelect={clickChangeName}>Click để đổi tên</ButtonKhanhNhan>
      <br></br>
      <p>{name}</p>

      <div>
        <button onClick={hanClick}>Thay đổi state trong Input, cái này khó, chưa hiểu</button>
        <Input ref={inputRef} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      {isActivedButton&&!isActivedDialog&&(<button className="action-btn" onClick={ActiveHandleButton}>Activate</button>)}
      {!isActivedButton&&isActivedDialog&& (<div className="alert-box">
          <h2>Warning!</h2>
          <p>Are you sure you want to activate this mode?</p>
          <button className="confirm-btn" onClick={ActiveHandleDialog}>Confirm</button>
          <button className="cancel-btn" onClick={CancelHandleDialog}>Cancel</button>
        </div>
      )
      }
      {!isActivedButton&&!isActivedDialog&&(<h3 className="success-message">Mode Activated!</h3>)}


      <Footer/>
    </>
  )
}
export default App;

//Props
export function BaiTapProps(ngonNgu){
  return (
    <>
        <li>
          <img src={ngonNgu.image}></img>
          <h3>{ngonNgu.title}</h3>
          <p>{ngonNgu.description}</p>
        </li>
    </>
  )
}
//Props sử dụng destructing cho hàm
export function HoatDong({image,tenHoatDong,thoiGianHoatDong,ngayHoatDongTrongTuan}){
  return (
    <>
      <li>
        <img src={image}></img>
        <h2>{tenHoatDong}</h2>
        <p>{thoiGianHoatDong}</p>
        <p>{ngayHoatDongTrongTuan}</p>
      </li>
    </>
  )
}
