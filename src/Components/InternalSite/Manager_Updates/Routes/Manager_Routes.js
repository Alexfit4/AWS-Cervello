import { React, useEffect, useState } from "react";
import axios from "axios";
import { createCurrent, createFuture, deleteFuture, deleteCurrent } from '../../../../graphql/mutations'
import { getCurrent, listCurrents, listFutures } from '../../../../graphql/queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
export default function Manager_Routes() {
    const [values, setValues] = useState();
    const [Futurevalues, setFutureValues] = useState();
    const [current, setCurrent] = useState([]);
    const [future, setFuture] = useState([]);

    useEffect(() => {
        fetchCurrent()
        fetchFuture()
    }, [])


    const handle = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const fetchCurrent = async () => {
        try {
            const songData = await API.graphql(graphqlOperation(listCurrents));
            const songList = songData.data.listCurrents.items;
            console.log('song list', songList);
            setCurrent(songList);

        } catch (error) {
            console.log('error on fetching songs', error);
        }
    };

    const fetchFuture = async () => {
        try {
            const FutureData = await API.graphql(graphqlOperation(listFutures));
            const FutureList = FutureData.data.listFutures.items;
            console.log('future list', FutureList);
            setFuture(FutureList);

        } catch (error) {
            console.log('error on fetching songs', error);
        }
    };



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let driver = e.target.elements.driver?.value;
        let vehicle_number = e.target.elements.vehicle_number?.value;
        let hazmat = e.target.elements.hazmat?.value;
        let load_description = e.target.elements.load_description?.value;

        const currentData = await API.graphql(graphqlOperation(createCurrent, {
            input: {
                driver: driver,
                vehicle_number: vehicle_number,
                hazmat: hazmat,
                load_description: load_description
            }
        }));


        fetchCurrent()
    };

    const handleFuture = (e) => {
        const { name, value } = e.target;
        setFutureValues({
            ...Futurevalues,
            [name]: value,
        });
    };

    const handleFutureFormSubmit = async (e) => {
        e.preventDefault();
        let date_scheduled = e.target.elements.date_scheduled?.value;
        let date_due = e.target.elements.date_due?.value;
        let load_description = e.target.elements.load_description?.value;

        const futureData = await API.graphql(graphqlOperation(createFuture, {
            input: {
                date_scheduled: date_scheduled,
                date_due: date_due,
                load_description: load_description
            }
        }));


        fetchFuture()
    };
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 ">
            <div>
                <h1 className="text-center font-black text-3xl text-white">
                    Current Operations
                </h1>
                <form onSubmit={handleFormSubmit}>
                    <table class="table-auto border-separate border border-black border-opacity-100 border-solid">
                        <thead>
                            <tr>
                                <th class="border border-black border-opacity-100 border-solid">
                                    Driver
                                </th>
                                <th class="border border-black border-opacity-100 border-solid">
                                    Vehicle Number
                                </th>
                                <th class="border border-black border-opacity-100 border-solid">
                                    HAZMAT (Y or N)
                                </th>
                                <th class="border border-black border-opacity-100 border-solid">
                                    Load Description
                                </th>
                            </tr>
                        </thead>
                        {current.length > 0
                            ? current.map((x) => {
                                return (
                                    <tr key={x.id}>
                                        <td className="border border-black border-opacity-100 border-solid">
                                            {x.driver}
                                        </td>
                                        <td className="border border-black border-opacity-100 border-solid">
                                            {x.vehicle_number}
                                        </td>
                                        <td className="border border-black border-opacity-100 border-solid">
                                            {x.hazmat}
                                        </td>
                                        <td className="border border-black border-opacity-100 border-solid">
                                            {x.load_description}
                                        </td>

                                        <td>
                                            {" "}
                                            <a
                                                onClick={async (e) => {
                                                    console.log(x.driver);
                                                    const deleteData = await API.graphql(graphqlOperation(deleteCurrent, {
                                                        input: {
                                                            id: x.id

                                                        }
                                                    }));

                                                    return fetchCurrent()


                                                }}
                                            >
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })
                            : null}
                        <tbody>

                            <tr>
                                <td
                                    onChange={handle}
                                    className="border border-black border-opacity-100 border-solid"
                                >
                                    <input type="text" name="driver" />
                                </td>
                                <td
                                    onChange={handle}
                                    className="border border-black border-opacity-100 border-solid"
                                >
                                    <input type="text" name="vehicle_number" />
                                </td>
                                <td
                                    onChange={handle}
                                    className="border border-black border-opacity-100 border-solid"
                                >
                                    <input type="text" name="hazmat" />
                                </td>
                                <td
                                    onChange={handle}
                                    className="border border-black border-opacity-100 border-solid"
                                >
                                    <textarea
                                        className="text-black resize border rounded-md"
                                        type="text"
                                        name="load_description"
                                    />
                                </td>


                                <button>Save</button>
                            </tr>
                        </tbody>
                    </table>
                </form>


                <form onSubmit={handleFutureFormSubmit}>
                    <h1 className="text-center font-black text-3xl text-white">
                        Future
                    </h1>
                    <table class="table-auto border-separate border border-black border-opacity-100 border-solid">
                        <thead>
                            <tr>
                                <th class="border border-black border-opacity-100 border-solid">
                                    Date Scheduled
                                </th>
                                <th class="border border-black border-opacity-100 border-solid">
                                    Date Due
                                </th>
                                <th class="border border-black border-opacity-100 border-solid">
                                    Load Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {future.length > 0
                                ? future.map((x) => {
                                    return (
                                        <tr key={x.id}>
                                            <td className="border border-black border-opacity-100 border-solid">
                                                {x.date_scheduled}
                                            </td>
                                            <td className="border border-black border-opacity-100 border-solid">
                                                {x.date_due}
                                            </td>
                                            <td className="border border-black border-opacity-100 border-solid">
                                                {x.load_description}
                                            </td>

                                            <td>
                                                {" "}
                                                <a
                                                    onClick={async (e) => {

                                                        const deleteData = await API.graphql(graphqlOperation(deleteFuture, {
                                                            input: {
                                                                id: x.id

                                                            }
                                                        }));

                                                        return fetchFuture()


                                                    }}
                                                >
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })
                                : null}
                            <tr>
                                <td
                                    onChange={handleFuture}
                                    className="border border-black border-opacity-100 border-solid"
                                >
                                    <input type="text" name="date_scheduled" />
                                </td>
                                <td
                                    onChange={handleFuture}
                                    className="border border-black border-opacity-100 border-solid"
                                >
                                    <input type="text" name="date_due" />
                                </td>
                                <td
                                    onChange={handleFuture}
                                    className="border border-black border-opacity-100 border-solid"
                                >
                                    <textarea
                                        className="text-black resize border rounded-md"
                                        type="text"
                                        name="load_description"
                                    />
                                </td>

                                <button>Save</button>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
