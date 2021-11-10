interface Props {
  height: number;
  width: number;
}

const TypescriptLogo = ({ height, width }: Props) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 512 125"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    className="-mb-2 fill-current"
  >
    <g>
      <path d="M63.8177792,11.3381841 L37.2540335,11.3381841 L37.2540335,93.621006 L26.4017716,93.621006 L26.4017716,11.3381841 L0,11.3381841 L0,1.61974059 L63.8177792,1.61974059 L63.8177792,11.3381841 Z M113.867763,27.8595381 L83.5786144,104.14932 C78.2334704,117.755141 70.6206897,124.558051 60.9022461,124.558051 C58.1486871,124.558051 55.8810503,124.234103 54.0993357,123.748181 L54.0993357,114.353686 C56.3669725,115.163556 58.4726352,115.487504 60.2543499,115.487504 C65.5994938,115.487504 69.4868712,112.248023 72.2404302,105.931034 L77.4236001,93.459032 L51.8316988,27.8595381 L63.4938311,27.8595381 L81.3109775,78.3954445 C81.4729516,79.0433407 81.9588738,80.6630813 82.60677,83.4166403 L82.9307181,83.4166403 C83.0926922,82.444796 83.5786144,80.8250554 84.2265106,78.5574185 L102.853527,27.8595381 L113.867763,27.8595381 L113.867763,27.8595381 Z M131.037014,84.0645365 L130.713065,84.0645365 L130.713065,123.748181 L120.184752,123.748181 L120.184752,27.8595381 L130.713065,27.8595381 L130.713065,39.3596963 L131.037014,39.3596963 C136.220183,30.6130971 143.832964,26.2397975 153.713382,26.2397975 C162.136033,26.2397975 168.776969,29.1553306 173.474217,34.9863967 C178.171465,40.8174628 180.601076,48.7541917 180.601076,58.6346093 C180.601076,69.6488453 177.847517,78.3954445 172.502373,85.0363809 C167.157229,91.6773173 159.868396,94.9167985 150.635875,94.9167985 C142.375198,95.2407466 135.734261,91.5153432 131.037014,84.0645365 L131.037014,84.0645365 Z M130.87504,57.6627649 L130.87504,66.8952863 C130.87504,72.4024043 132.656754,76.937678 136.220183,80.6630813 C139.783613,84.3884847 144.156912,86.3321734 149.66403,86.3321734 C155.981019,86.3321734 161.002214,83.9025625 164.727618,79.0433407 C168.291047,74.1841189 170.072762,67.3812085 170.072762,58.6346093 C170.072762,51.3457767 168.453021,45.5147105 165.051566,41.4653591 C161.650111,37.2540335 157.114837,35.3103448 151.283771,35.3103448 C145.128757,35.3103448 140.269535,37.4160076 136.544132,41.6273331 C132.656754,45.8386587 130.87504,51.1838026 130.87504,57.6627649 L130.87504,57.6627649 Z M245.066751,63.331857 L198.74217,63.331857 C198.904144,70.6206897 200.847833,76.2897817 204.573236,80.3391332 C208.29864,84.3884847 213.48181,86.3321734 220.122746,86.3321734 C227.573553,86.3321734 234.376463,83.9025625 240.531477,79.0433407 L240.531477,88.9237583 C234.700411,93.1350838 227.08763,95.2407466 217.693135,95.2407466 C208.460614,95.2407466 201.171781,92.3252135 195.826637,86.3321734 C190.481493,80.3391332 187.889908,71.9164821 187.889908,61.2261942 C187.889908,51.0218285 190.805441,42.5991775 196.636507,36.2821892 C202.467574,29.8032268 209.594432,26.5637457 218.179057,26.5637457 C226.763682,26.5637457 233.404619,29.3173047 238.101866,34.9863967 C242.799114,40.4935147 245.228725,48.2682695 245.228725,58.1486871 L245.066751,63.331857 L245.066751,63.331857 Z M234.214489,54.4232838 C234.214489,48.2682695 232.756723,43.5710218 229.841189,40.1695666 C226.925656,36.7681114 222.876305,35.1483708 217.855109,35.1483708 C212.833913,35.1483708 208.622588,36.9300854 205.221133,40.4935147 C201.819677,44.056944 199.55204,48.7541917 198.74217,54.4232838 L234.214489,54.4232838 Z M250.249921,90.3815248 L250.249921,83.0926922 C256.890857,87.3040177 263.531794,89.4096805 270.334704,89.4096805 C277.461563,89.4096805 282.968681,87.951914 286.694084,84.8744068 C290.419488,81.7968997 292.201202,77.7475482 292.201202,72.4024043 C292.201202,67.7051566 290.90541,63.9797532 288.475799,61.0642202 C286.046188,58.3106612 280.53907,54.4232838 272.278393,49.564062 C262.883898,44.056944 257.052831,39.5216704 254.62322,35.9582411 C252.19361,32.2328377 250.897817,28.0215122 250.897817,23.3242645 C250.897817,16.8453021 253.489402,11.3381841 258.510598,6.80291047 C263.531794,2.26763682 270.334704,0 278.757355,0 C284.264473,0 289.771591,0.971844353 295.116735,2.753559 L295.116735,9.39449541 C289.771591,6.96488453 283.940525,5.66909206 277.785511,5.66909206 C271.468523,5.66909206 266.609301,7.28883265 262.883898,10.3663398 C259.158494,13.6058209 257.37678,17.4931984 257.37678,22.3524201 C257.37678,27.0496678 258.672572,30.7750712 261.102183,33.5286302 C263.531794,36.2821892 269.038912,40.1695666 277.299589,44.8668143 C285.884214,49.7260361 291.553306,54.0993357 294.468839,57.824739 C297.384372,61.5501424 298.680165,65.9234419 298.680165,70.9446378 C298.680165,78.0714964 296.250554,83.7405884 291.391332,88.2758621 C286.53211,92.8111357 279.567226,94.9167985 270.658652,94.9167985 C267.419171,94.9167985 263.855742,94.4308763 259.644416,93.459032 C255.433091,92.4871876 252.355584,91.6773173 250.249921,90.3815248 L250.249921,90.3815248 Z M353.427396,90.705473 C348.568175,93.621006 342.737109,95.2407466 335.934198,95.2407466 C327.025625,95.2407466 319.736792,92.1632395 314.229674,86.0082252 C308.722556,79.853211 305.968997,71.9164821 305.968997,61.8740905 C305.968997,51.5077507 309.046504,42.9231256 315.201519,36.2821892 C321.356533,29.6412528 329.293262,26.2397975 339.011705,26.2397975 C344.032901,26.2397975 348.892123,27.2116419 353.58937,29.3173047 L353.58937,35.9582411 C348.892123,33.042708 343.708953,31.5849415 338.201835,31.5849415 C330.42708,31.5849415 324.272066,34.3385005 319.412844,39.8456185 C314.553622,45.3527365 312.285985,52.6415691 312.285985,61.3881683 C312.285985,69.9727934 314.553622,76.7757039 318.926922,81.9588738 C323.300221,87.1420437 329.131288,89.7336286 336.258146,89.7336286 C342.899083,89.7336286 348.568175,87.951914 353.427396,84.5504587 L353.427396,90.705473 L353.427396,90.705473 Z M392.625119,34.0145524 C390.68143,32.5567858 388.413793,31.9088896 385.660234,31.9088896 C380.477064,31.9088896 376.103765,34.6624486 372.702309,40.0075925 C369.13888,45.3527365 367.51914,52.9655172 367.51914,62.8459348 L367.51914,93.7829801 L361.688073,93.7829801 L361.688073,27.8595381 L367.51914,27.8595381 L367.51914,42.4372034 L367.843088,42.4372034 C369.300854,37.4160076 371.730465,33.5286302 374.969946,30.7750712 C378.209427,28.0215122 381.934831,26.5637457 386.30813,26.5637457 C388.737741,26.5637457 391.005378,26.8876938 392.787093,27.6975641 L392.787093,34.0145524 L392.625119,34.0145524 L392.625119,34.0145524 Z M402.019614,11.3381841 C400.723822,11.3381841 399.590003,10.8522619 398.618159,9.88041759 C397.646314,8.90857324 397.160392,7.77475482 397.160392,6.31698829 C397.160392,4.85922177 397.646314,3.72540335 398.618159,2.91553306 C399.590003,2.10566276 400.723822,1.61974059 402.019614,1.61974059 C403.315407,1.61974059 404.449225,2.10566276 405.583043,2.91553306 C406.554888,3.72540335 407.04081,4.85922177 407.04081,6.31698829 C407.04081,7.61278077 406.554888,8.90857324 405.583043,9.88041759 C404.449225,10.8522619 403.315407,11.3381841 402.019614,11.3381841 Z M399.104081,93.621006 L399.104081,27.8595381 L404.935147,27.8595381 L404.935147,93.621006 L399.104081,93.621006 Z M425.181904,81.9588738 L424.857956,81.9588738 L424.857956,123.910155 L419.02689,123.910155 L419.02689,27.8595381 L424.857956,27.8595381 L424.857956,41.4653591 L425.181904,41.4653591 C427.611515,36.6061373 430.850997,32.8807339 435.224296,30.289149 C439.597596,27.6975641 444.456817,26.4017716 449.639987,26.4017716 C458.062638,26.4017716 464.541601,29.3173047 469.238848,34.9863967 C473.936096,40.8174628 476.203733,48.5922177 476.203733,58.4726352 C476.203733,69.4868712 473.450174,78.3954445 468.10503,85.198355 C462.759886,92.0012654 455.633028,95.4027207 446.886428,95.4027207 C437.167985,95.2407466 429.879152,90.867447 425.181904,81.9588738 Z M424.857956,57.5007909 L424.857956,65.7614679 C424.857956,72.4024043 426.963619,78.0714964 431.012971,82.7687441 C435.224296,87.4659918 440.56944,89.8956027 447.372351,89.8956027 C454.013287,89.8956027 459.520405,86.9800696 463.73173,81.3109775 C467.943056,75.4799114 470.048719,68.0291047 470.048719,58.6346093 C470.048719,50.3739323 468.10503,43.8949699 464.217653,39.0357482 C460.330275,34.1765264 455.309079,31.7469155 448.830117,31.7469155 C441.217336,31.7469155 435.224296,34.3385005 431.012971,39.5216704 C426.801645,44.7048402 424.857956,50.5359064 424.857956,57.5007909 Z M512,92.6491617 C508.922493,94.1069282 506.00696,94.7548244 503.415375,94.7548244 C493.696931,94.7548244 488.83771,88.9237583 488.83771,77.2616261 L488.83771,33.3666561 L477.013603,33.3666561 L477.013603,28.0215122 L488.83771,28.0215122 L488.83771,10.8522619 L491.753243,9.88041759 L494.668776,8.90857324 L494.668776,28.0215122 L512,28.0215122 L512,33.3666561 L494.668776,33.3666561 L494.668776,76.7757039 C494.668776,81.3109775 495.316672,84.5504587 496.774438,86.6561215 C498.232205,88.7617842 500.661816,89.7336286 504.063271,89.7336286 C506.492882,89.7336286 509.084467,88.9237583 512,87.3040177 L512,92.6491617 L512,92.6491617 Z"></path>
    </g>
  </svg>
);

export default TypescriptLogo;
