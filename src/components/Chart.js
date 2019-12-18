import React from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

const Chart = props => {
    const orderMonths = () => {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        const today = new Date();
        let month = today.getMonth();

        const orderedMonths = [];
        for (let i = 0; i < 12; i++) {
            orderedMonths.push(months[month]);
            month === 0 ? month = 11 : month--;
        }

        return orderedMonths;
    }

    const computeBills = bills => {
        const oneYearAgo = moment().subtract(1, 'years');
        const months = orderMonths();
        const billTotalPerMonth = Array(12).fill(0);

        for (const bill of bills) {
            if (moment(bill.date).isSameOrBefore(oneYearAgo)) {
                continue;
            }

            const month = moment(bill.date).format('MMM');
            const monthIndex = months.indexOf(month);
            billTotalPerMonth[monthIndex] += parseInt(bill.amount);
        }

        return billTotalPerMonth;
    }

    const data = {
        labels: orderMonths(),
        datasets: [
            {
                label: 'Amount',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: computeBills(props.bills)
            }
        ]
    };

    return <div>
        <Bar data={data}
            width={100}
            height={550}
            options={{ maintainAspectRatio: false }} />
    </div>;
}

export default Chart;