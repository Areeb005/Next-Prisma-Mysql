"use client";



const CallAPiButtons = () => {

    function Call1() {
        API1()
            .then(items => {
                setdata(items)
            })
    }
    function Call2() {
        API2()
            .then(items => {
                setdata(items)
            })
    }

    const [data, setdata] = useState([])

    return <>
        <button onClick={() => Call1()} className='border bg-red-400 mt-12'>CALL API 1</button>
        <button onClick={() => Call2()} className='border bg-blue-400 mt-12 block'>CALL API 2</button>
    </>
}

export default CallAPiButtons