import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledWrapper style={{width:'246px'}}>
            <div className="card-conteiner">
                <div className="card-content">
                    <div className="card-title" style={{fontSize:'26px'}}>Price Range </div>
                    <div className="values">
                        <div><span id="first" style={{color:'#FF084E'}}>$735</span></div>
                        <div><span id="second" style={{color:'#FF084E'}}>- $6 465</span></div>
                    </div>
                    <small className="current-range">
                        Current Range:
                        <div>$<span id="third">7 200</span></div>
                    </small>
                    <div data-range="#third" data-value-1="#second" data-value-0="#first" className="slider">
                        <label className="label-min-value">1</label>
                        <label className="label-max-value">10 000</label>
                    </div>
                    <div className="rangeslider">
                        <input className="min input-ranges" name="range_1" type="range" min={1} max={10000} defaultValue={735} />
                        <input className="max input-ranges" name="range_1" type="range" min={1} max={10000} defaultValue={6465} />
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card-conteiner {
    cursor: default;
    --color-primary: #275efe;
    --color-headline: #3f4656;
    --color-text: #99a3ba;
  }

  .card-content {
    width: 100%;
    max-width: 312px;
  //  padding: 36px 32px;
    background: #fff;
    border-radius: 10px;
  }

  
  .card-content .card-title span {
    font-weight: 500;
  }

  .card-content .values div, .card-content .current-range div {
    display: inline-block;
    vertical-align: top;
  }

  .card-content .values {
    margin: 0;
    font-weight: 500;
    color: var(--color-primary);
  }

  .card-content .values > div:first-child {
    margin-right: 2px;
  }

  .card-content .values > div:last-child {
    margin-left: 2px;
  }

  .card-content .current-range {
    display: block;
    color: var(--color-text);
    margin-top: 8px;
    font-size: 14px;
  }

  .card-content .slider {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: .6em;
    color: var(--color-text);
  }

  /* Range Slider */
  .input-ranges[type='range'] {
    width: 240px;
    height: 30px;
    overflow: hidden;
    outline: none;
  }

  .input-ranges[type='range'],
  .input-ranges[type='range']::-webkit-slider-runnable-track,
  .input-ranges[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: none;
  }

  .input-ranges[type='range']::-webkit-slider-runnable-track {
    width: 200px;
    height: 1px;
    background: var(--color-headline);
  }

  .input-ranges[type='range']:nth-child(2)::-webkit-slider-runnable-track {
    background: none;
  }

  .input-ranges[type='range']::-webkit-slider-thumb {
    position: relative;
    height: 15px;
    width: 15px;
    margin-top: -7px;
    background: #fff;
    border: 1px solid var(--color-headline);
    border-radius: 25px;
    cursor: pointer;
    z-index: 1;
    transition: .5s;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
  }

  .input-ranges[type='range']::-webkit-slider-thumb:hover {
    background: #eaefff;
    border: 1px solid var(--color-primary);
    outline: .5px solid var(--color-primary);
  }

  .input-ranges[type='range']::-webkit-slider-thumb:active {
    cursor: grabbing;
  }

  .input-ranges[type='range']:nth-child(1)::-webkit-slider-thumb {
    z-index: 2;
  }

  .rangeslider {
    font-family: sans-serif;
    font-size: 14px;
    position: relative;
    height: 20px;
    width: 210px;
    display: inline-block;
    margin-top: -5px;
  }

  .rangeslider input {
    position: absolute;
  }

  .rangeslider span {
    position: absolute;
    margin-top: 20px;
    left: 0;
  }

  .rangeslider .right {
    position: relative;
    float: right;
    margin-right: -5px;
  }`;

export default Card;
