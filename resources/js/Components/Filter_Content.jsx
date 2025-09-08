import { useState } from "react";

export function Filter_Content({ dataList, setFilterList }) {

    const [typeStatus, setTypeStatus] = useState("All");
    const [valueOption, setValueOption] = useState("");

    const styleButtonType = "btn btn-outline-dark py-0 px-2"

    function defaultFilter() {
        setFilterList(dataList)
        setTypeStatus("All");
    }

    function filterByType(type) {

        const filter = dataList.filter((item) => {
            return item.type == type
        })

        setFilterList(filter);
        setTypeStatus(type);
    }

    function filterByOption(e) {

        let filter;

        switch (e.target.value) {
            case "highScore":
                filter = [...dataList].sort((a, b) => b.score - a.score)
                setFilterList(filter)
                setValueOption(e.target.value)
                break
            case "lowScore":
                filter = [...dataList].sort((a, b) => a.score - b.score)
                setFilterList(filter)
                setValueOption(e.target.value)
                break
            case "topYear":
                filter = [...dataList].sort((a, b) => b.aired.prop.from.year - a.aired.prop.from.year)
                setFilterList(filter)
                setValueOption(e.target.value)
                break
            case "lowYear":
                filter = [...dataList].sort((a, b) => a.aired.prop.from.year - b.aired.prop.from.year)
                setFilterList(filter)
                setValueOption(e.target.value)
                break
        }


    }

    return (
        <>
            <div className="d-flex gap-1 my-3 justify-content-end">
                <button className={styleButtonType} onClick={defaultFilter}>All</button>
                <button className={styleButtonType} onClick={() => filterByType("TV")}>Tv</button>
                <button className={styleButtonType} onClick={() => filterByType("ONA")}>Ona</button>
                <button className={styleButtonType} onClick={() => filterByType("OVA")}>Ova</button>
                <button className={styleButtonType} onClick={() => filterByType("Movie")}>Movie</button>
                <button className={styleButtonType} onClick={() => filterByType("Special")}>Special</button>
                <button className={styleButtonType} onClick={() => filterByType(null)}>Unknown</button>

                <select value={valueOption} onChange={filterByOption}>
                    <option value="none">Select</option>
                    <option value="highScore">Highest Score</option>
                    <option value="lowScore">Lowest Score</option>
                    <option value="topYear">Latest Year</option>
                    <option value="lowYear">Lowest Year</option>
                </select>
            </div>

            <h6 className="bg-dark text-center text-light rounded-3 p-1 ">{typeStatus}</h6>
        </>
    )
}