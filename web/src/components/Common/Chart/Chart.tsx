import { ResponsivePie } from "@nivo/pie";

const Chart = (): JSX.Element => {
  const data = [
    {
      id: "국어",
      label: "국어",
      value: 100,
      color: "#ED6A5E",
    },
    {
      id: "수학",
      label: "수학",
      value: 100,
      color: "#8886FF",
    },
    {
      id: "과학",
      label: "과학",
      value: 300,
      color: "#F6C343",
    },
  ];

  return (
    <>
      <ResponsivePie
        data={data}
        colors={(data) => data.data.color}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={2}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 20,
            translateY: 40,
            itemsSpacing: -30,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
      />
    </>
  );
};

export default Chart;
