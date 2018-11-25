import React from 'react'

const getViewBox = name => {
  switch (name) {
    case 'arrow-down':
      return '0 0 40 40'
    case 'search':
      return '0 0 40 40'
    case 'phone':
      return '0 0 32 33'
    case 'message':
      return '0 0 38 34'
    case 'envelope':
      return '0 0 40 26'
    case 'trash':
      return '0 0 13.5 17.5'
    case 'wifi':
      return '0 0 12 9'
    default:
      return '0 0 32 32'
  }
}

const getPath = (name, props) => {
  switch (name) {
    case 'arrow-down':
      return (
        <path
          {...props}
          d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441 L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082 c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647 c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"
        />
      )
    case 'search':
      return (
        <path
          {...props}
          d="m34.8 30.2c0.3 0.3 0.3 0.8 0 1.1l-3.4 3.5c-0.1 0.1-0.4 0.2-0.6 0.2s-0.4-0.1-0.6-0.2l-6.5-6.8c-2 1.2-4.1 1.8-6.3 1.8-6.8 0-12.4-5.5-12.4-12.4s5.6-12.4 12.4-12.4 12.4 5.5 12.4 12.4c0 2.1-0.6 4.2-1.7 6.1z m-17.4-20.4c-4.1 0-7.6 3.4-7.6 7.6s3.5 7.6 7.6 7.6 7.5-3.4 7.5-7.6-3.3-7.6-7.5-7.6z"
        />
      )
    case 'phone':
      return (
        <path
          {...props}
          d="M 2.56635 12.9241C 0.708307 9.55549 0 6.83983 0 5.00558C 0 3.17134 0.450658 2.64526 0.907953 2.22025C 1.36525 1.79524 3.42732 0.523908 3.77867 0.286808C 4.13002 0.0497085 5.47099 -0.41107 6.31193 0.798636C 7.15287 2.00834 8.73646 4.43718 9.82825 6.05069C 11.5415 8.33611 10.1766 9.33937 9.73572 9.94069C 8.92447 11.0472 8.45734 11.3201 8.45734 12.6788C 8.45734 14.0375 12.2545 17.8976 13.1625 18.8487C 14.0635 19.7926 17.8471 23.1094 19.0195 23.2868C 20.2002 23.4654 21.7807 22.2154 22.1168 21.8985C 23.8263 20.586 24.7912 21.581 25.5787 22.0136C 26.3661 22.4461 29.9239 24.663 31.0264 25.4103C 32.0641 26.1576 31.9992 27.3125 31.9992 27.3125C 31.9992 27.3125 29.859 30.7092 29.5996 31.1168C 29.2753 31.5924 28.4971 32 26.746 32C 24.995 32 23.1241 31.6802 18.6777 29.2349C 15.0396 27.234 11.5714 24.1009 9.75551 22.2666C 7.87475 20.4324 4.68876 16.772 2.56635 12.9241Z"
        />
      )
    case 'message':
      return (
        <path
          {...props}
          d="M19.0675 0C8.5371 0 0 7.092 0 15.8401c0 5.5527 3.4417 10.4345 8.6471 13.2632.0083.0091.0221.0182.0434.0277.8433.3798.41 1.6817-.5651 2.8751-.742.9083-2.1668 1.8444-1.6251 1.8444.8667 0 2.7535-.4018 3.94-1.0597 1.7586-.9752 2.9897-1.8141 4.5758-1.469l-.0013-.0035a22.867 22.867 0 0 0 4.0527.3619c10.5309 0 19.0676-7.0916 19.0676-15.8401C38.1351 7.0921 29.5984 0 19.0675 0z"
        />
      )
    case 'envelope':
      return (
        <path
          {...props}
          d="M 22.8196 15.7456C 22.0005 16.5862 20.9038 17.0508 19.7317 17.0542C 18.5632 17.0444 17.46 16.5994 16.6362 15.7646L 1.09009 0L 38.1626 0L 22.8196 15.7456ZM 0 1.06567L 11.2952 12.5818L 0 24.1392L 0 1.06567ZM 27.9519 12.623L 39.2878 24.1233L 39.2878 1.06567L 27.9519 12.623ZM 23.7844 16.9265L 27.0105 13.6885L 38.1833 25.082L 1.10547 25.082L 12.4006 13.6885L 15.6772 16.9512C 16.7539 18.0415 18.1877 18.6418 19.7185 18.6418L 19.7363 18.6418C 21.2734 18.6375 22.7109 18.0281 23.7844 16.9265Z"
        />
      )
    case 'trash':
      return (
        <path
          {...props}
          d="M 8.18183 4.36365L 9.27274 4.36365L 9.27274 14.7273L 8.18183 14.7273L 8.18183 4.36365ZM 6.00001 4.36365L 7.09092 4.36365L 7.09092 14.7273L 6.00001 14.7273L 6.00001 4.36365ZM 3.81819 4.36365L 4.9091 4.36365L 4.9091 14.7273L 3.81819 14.7273L 3.81819 4.36365ZM 1.67946 2.72729L 2.72509 16.3216L 10.3636 16.3637L 11.4103 2.72729L 1.67946 2.72729ZM 7.512 1.08873L 5.56309 1.09091C 5.54127 1.10455 5.454 1.22236 5.454 1.41818L 5.454 1.63638L 7.63582 1.63638L 7.63582 1.41818C 7.63582 1.22236 7.54855 1.10455 7.512 1.08873ZM 5.56309 0L 7.52673 0C 8.19928 0 8.72673 0.622909 8.72673 1.41818L 8.72673 1.63638L 12.5885 1.63638L 13.0909 1.63638L 13.0909 2.72729L 12.5046 2.72729L 11.4524 16.4056C 11.454 16.9653 10.9642 17.4546 10.3631 17.4546L 2.72676 17.4546C 2.12511 17.4546 1.63585 16.9653 1.63585 16.3637L 0.585305 2.72729L 0 2.72729L 0 1.63638L 0.501262 1.63638L 4.36309 1.63638L 4.36309 1.41818C 4.36309 0.622909 4.89054 0 5.56309 0Z"
        />
      )
    case 'wifi':
      return (
        <path
          {...props}
          d="M 5.99609 1.51367C 7.93604 1.51367 9.7041 2.22479 11.0596 3.39136L 12 2.35657C 10.3945 0.969788 8.29785 0 5.99561 0C 3.69775 0 1.60352 0.967163 0 2.35022L 0.938965 3.38574C 2.29395 2.22217 4.05908 1.51367 5.99609 1.51367ZM 5.91553 5.9726C 5.13672 5.9726 4.42383 6.28912 3.86963 6.74567L 5.91553 9L 7.96338 6.74792C 7.40918 6.29028 6.69531 5.9726 5.91553 5.9726ZM 9.01318 5.61206C 8.19385 4.92072 7.13184 4.5 5.96875 4.5C 4.80811 4.5 3.74756 4.91882 2.9292 5.60907L 1.93457 4.5127C 3.01758 3.58954 4.42578 2.98633 5.96924 2.98633C 7.51562 2.98633 8.92578 3.59143 10.0088 4.51721L 9.01318 5.61206Z"
        />
      )
    default:
      return <path />
  }
}

const SVGIcon = ({
  name = '',
  style = {},
  fill = '#000',
  viewBox = '',
  width = '100%',
  className = '',
  height = '100%',
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
)

export default SVGIcon
