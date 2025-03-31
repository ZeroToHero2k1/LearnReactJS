
import './App.css'
import avatarPic from '../Image/avatar-cua-phuoc.jpg'

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
      </div>
    </>
  )
}
export default App
export function BaiTapProps(){
  return (
    <>
      
    </>
  )
}
