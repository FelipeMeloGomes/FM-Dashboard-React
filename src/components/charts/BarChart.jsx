import { Chart } from "react-google-charts";

export const data = [
    ["Ano", "Vendas", "Despesas", "Lucro"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
];

export const options = {
    chart: {
        title: "Perfomance da empresa",
        subtitle: "Vendas, despesas e lucro: 2014-2017",
    },
    colors: ["rgb(53,138,148)", "rgb(37,11,165)"],
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
