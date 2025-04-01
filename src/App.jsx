
import './App.css'
import avatarPic from '../Image/avatar-cua-phuoc.jpg'
import logo1 from '../Image/logo-1.jpg'
import logo2 from '../Image/logo-2.png'
import logo3 from '../Image/logo-3.webp'//lần sau nên bỏ hình trong folder assets
import logo4 from '../Image/logo-4.webp'
import myData from './data.js'

let today=new Date().toLocaleDateString();
let timenow=new Date().toLocaleTimeString()
const welcome=["Hello bạn đã đến với thế giới React","Mày là ai?","Tao là Tô Quý Phước đây"];
let rd=Math.floor(Math.random()*welcome.length);
console.log(rd);


export function Header(){
  return (
    <>
      <h1>Đây là web React đầu tiên</h1>
    </>
  )
}
const user={
  name:"Tô Quý Phước",
  age:25,
  gender:"male"
};
let hasGirlFriend=true;
function App() {

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
        </div>
        
      </div>
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
