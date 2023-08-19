import Component2 from '../ui/Component2';
import TableDis from '../ui/TableDis'

export default function Page2() {
    console.log(localStorage.getItem('userData'));
    return (
        <>
            <TableDis />
            <Component2 />
        </>
    )
}