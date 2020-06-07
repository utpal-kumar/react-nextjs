class CustomerComponent extends React.Component {
    constructor(props) {
        super(props);

        var me = this;

        me.state = { isToggleOn: true, customer: { Name: '' }};


        // This binding is necessary to make `this` work in the callback
        me.handleClick = this.handleClick.bind(this); 

        me.init();
    }

    async init() {
        var me = this;

        const res = await fetch(`https://core.aclaro.ai/api/Customer/GetScheduleCustomerInfo?DealerGroupId=3&ScheduleEmail=carlos.galarce%40yahoo.com&JsonToken=abc%40%23%24%25%5E123456789RTRTRRVBV`)
        const data = await res.json();
        
        me.setState(state => ({
            isToggleOn: !state.isToggleOn,
            customer: { Name: data.Data.Customer.Name }
        }));
    } 

    async handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>About Name: {this.state.customer.Name}

                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default CustomerComponent;