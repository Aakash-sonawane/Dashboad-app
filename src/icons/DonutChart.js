const DonutChart = () => (
    <div className='icon-wrap'>
      <div className="inside">
        <div className="percent">70%</div>
        <div className="text-content">goal completed</div>
      </div>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="false"
    aria-label="Interactive chart"
    viewBox="0 0 600 400"
    height="400"
    width="600"
    style={{ fontFamily: 'Roboto', fontSize: '12px' }}
    className="highcharts-root"
    version="1.1"
  >
    <desc aria-hidden="true">Created with Highcharts 10.3.1</desc>
    <defs aria-hidden="true">
      <clipPath id="highcharts-y9kkrnr-99-">
        <rect fill="none" height="375" width="580" y="0" x="0" />
      </clipPath>
      <clipPath id="highcharts-y9kkrnr-100-">
        <rect fill="none" height="1001.3826583317466" width="580" y="0" x="0" />
      </clipPath>
    </defs>
    <rect aria-hidden="true" height="375" width="580" y="10" x="10" className="highcharts-plot-background" fill="none" />
    <g aria-hidden="true" data-z-index="0" className="highcharts-pane-group">
      <path className="highcharts-pane" d="M 300 19 A 178.5 178.5 0 1 1 299.8215000297499 19.000089249992556 M 299.85975002337494 57.25007012499415 A 140.25 140.25 0 1 0 300 57.25" fill="#1e3760" />
    </g>
    <rect aria-hidden="true" height="375" width="580" y="10" x="10" data-z-index="1" className="highcharts-plot-border" fill="none" />
    <g aria-hidden="true" data-z-index="2" className="highcharts-axis highcharts-yaxis highcharts-radial-axis">
      <path d="M 300 38.125 A 159.375 159.375 0 1 1 299.8406250265624 38.125079687493354 M 300 197.5 A 0 0 0 1 0 300 197.5" data-z-index="7" className="highcharts-axis-line" fill="none" />
    </g>
    <g aria-hidden="false" data-z-index="3" className="highcharts-series-group">
      <g aria-hidden="false" clipPath="url(#highcharts-y9kkrnr-99-)" transform="translate(10,10) scale(1 1)" opacity="1" data-z-index="0.1" className="highcharts-series highcharts-series-0 highcharts-solidgauge-series">
        <path
          style={{ outline: 'none' }}
          aria-label="0.75."
          role="img"
          tabIndex="-1"
          className="highcharts-point highcharts-color-0"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M 290 9.5 A 178.5 178.5 0 1 1 111.50008924999256 188.17849997025002 A 19.125 19.125 0 1 1 149.75007012499415 188.140249976625 A 140.25 140.25 0 1 0 290 47.75 A 19.125 19.125 0 1 1 290 9.5"
          fill="#64a2fd"
        />
      </g>
      <g aria-hidden="true" clipPath="none" transform="translate(10,10) scale(1 1)" opacity="1" data-z-index="0.1" className="highcharts-markers highcharts-series-0 highcharts-solidgauge-series" />
    </g>
  </svg>
  <div className="btm-text">*The values here has been rounded of</div>
  </div>
  );
  
  export default DonutChart;
  