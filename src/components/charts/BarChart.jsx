import { Chart } from "react-google-charts";

export const data = [
    ["Ano", "Vendas", "Despesas", "Lucro"],
    ["2014", 1000, 400, 10000],
    ["2015", 1170, 460, 13000],
    ["2016", 660, 1120, 5000],
    ["2017", 1030, 540, 6000],
    ["2018", 1030, 540, 7000],
    ["2019", 2000, 540, 9000],
    ["2020", 5000, 540, 11000],
    ["2021", 6000, 540, 3060],
    ["2022", 14000, 540, 40500],
    ["2023", 17000, 540, 4000],
];

export const options = {
    chart: {
        title: "Perfomance da empresa",
        subtitle: "Vendas, despesas e lucro: 2014-2017",
    },
    colors: ["#0000CD", "#FF0000", "#008000"],
};

export default function BarChart() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="350px"
            data={data}
            options={options}
        />
    );
}
