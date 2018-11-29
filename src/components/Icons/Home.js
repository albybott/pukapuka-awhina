import React from 'react'

const Home = ({
  style = {},
  fill = '#000',
  viewBox = '0 0 612 612',
  width = '100%',
  className = '',
  height = '100%',
}) => (
  <svg
    width={width}
    fill={fill}
    style={style}
    height={height}
    className={className}
    xmlns="xmlns='http://www.w3.org/2000/svg"
    viewBox={viewBox}
  >
    <path d="M458.388,230.724c0-3.672-1.428-6.528-4.284-8.568L313.344,113.22 c-4.08-3.264-8.568-3.264-13.464,0L164.016,222.156c-2.448,2.04-3.672,4.896-3.672,8.568v196.452c0,3.267,1.02,5.916,3.06,7.956 s4.488,3.063,7.344,3.063h80.784c3.264,0,5.916-1.021,7.956-3.063c2.04-2.04,3.06-4.689,3.06-7.956V306.613h93.024v120.562 c0,3.267,1.02,5.916,3.06,7.956s4.692,3.063,7.956,3.063h80.784c3.264,0,5.916-1.021,7.956-3.063s3.06-4.689,3.06-7.956V230.724z M306,0c42.024,0,81.702,8.058,119.034,24.174s69.768,37.944,97.308,65.484s49.368,59.976,65.484,97.308S612,263.976,612,306 c0,28.152-3.672,55.284-11.016,81.396c-7.347,26.109-17.646,50.487-30.906,73.134c-13.26,22.644-29.172,43.248-47.736,61.812 c-18.562,18.564-39.168,34.479-61.812,47.736c-22.646,13.26-47.022,23.562-73.136,30.906C361.284,608.328,334.152,612,306,612 s-55.284-3.672-81.396-11.016c-26.112-7.347-50.49-17.646-73.134-30.906s-43.248-29.172-61.812-47.736 c-18.564-18.562-34.476-39.168-47.736-61.812c-13.26-22.646-23.562-47.022-30.906-73.135C3.672,361.284,0,334.152,0,306 s3.672-55.284,11.016-81.396s17.646-50.49,30.906-73.134s29.172-43.248,47.736-61.812s39.168-34.476,61.812-47.736 s47.022-23.562,73.134-30.906S277.848,0,306,0z" />
  </svg>
)

export default Home
