export function ButtonKhanhNhan({children,onSelect}){
    return <>
        <button onClick={onSelect}>{children}</button>
    </>
}