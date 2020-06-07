function About({ data }) {
    debugger;
    // Render data...

    return (
        <div>About Name: {data.Data.Customer.Name}</div>
        );
}

// This gets called on every request
export async function getServerSideProps() {
    debugger;
    // Fetch data from external API
    const res = await fetch(`https://core.aclaro.ai/api/Customer/GetScheduleCustomerInfo?DealerGroupId=3&ScheduleEmail=carlos.galarce%40yahoo.com&JsonToken=abc%40%23%24%25%5E123456789RTRTRRVBV`)
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default About;