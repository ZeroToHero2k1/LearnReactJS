{/*handle click cho button, ko sử dụng adEventListener như js nữa */}


// export default function TabButton(props){
//     function handleClick(){
//         alert("Nút bấm đã được bấm");
//     }
//     return (
//         <li>
//             <button onClick={handleClick}>{props.children}</button>
//             {/* //phải gõ đúng thuộc tính children của Props nó mới ra innerHTML */}
//         </li>
        
//     );
// }

export default function TabButton({children,onSelect}){
    // function handleClick(){
    //     alert("Nút bấm đã được bấm");
    // }
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
            {/* //phải gõ đúng thuộc tính children của Props nó mới ra innerHTML */}
        </li>
        
    );
}