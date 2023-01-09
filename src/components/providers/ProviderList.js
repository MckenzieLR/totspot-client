import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllProviders } from "../../managers/ProviderManager"
import "./Providers.css"



export const ProviderList = () => {
    const [providers, setProviders] = useState([])

    
    
    const updateProviderList = () => {
        getAllProviders().then(setProviders)
    }

    useEffect(() => {
        updateProviderList()
    }, [])


    return <>
        <h1 className="providerHeader">Provider List</h1>
        <section className="providers">
            {
                providers.map(provider => {
                    return <div className="provider">
                        <h3 className="provider__name">Name: {provider.full_name}</h3>
                        <div className="provider_number">Phone Number: {provider.phone_number}</div>
                    </div>
                })
            }
        </section>
    </>
}