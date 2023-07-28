import { Add } from "@mui/icons-material";
import React from "react";
import './Css/SidebarOptions.css'

function SidebarOptions() {
  return (
    <div>
      <div className="sidebarOptions">
        <div className="sidebarOption">
          <img
            src="https://thumbs.dreamstime.com/b/letter-h-stylish-faceted-ruby-alphabet-letter-h-stylish-faceted-ruby-alphabet-shiny-gemstone-letters-numbers-134825462.jpg"
            alt=""
          />
          <p>History</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/207/692/small/logo-letter-B-typography-vector-design.jpg"
            alt=""
          />

          <p>Business</p>
        </div>
        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA19vA-FdyP1vmHEoVBBYzHRCvSDrKW9ui6x3CmpdngQMFABgW4IEaT4MdXz-tZ4rVmos&usqp=CAU"
            alt=""
          />
          <p>Psychology</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bakery-logo-editable-design-template-318ed295f4f108e87568fe6b02469673.jpg?ts=1597223647"
            alt=""
          />
          <p>Cooking</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcdsc0O98u1pVGB5Y14k4OL_RykxHGul2oSzd7n2qV1R6q8EO1RCwRdBitrrrj6qyAVw&usqp=CAU"
            alt=""
          />
          <p>Music</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3uSwmu9OBAecXa3PVah9r5EpLfMXqAeJl7-ckzupVXoCOXHZvT9UMSBH3wZh4k21OOY&usqp=CAU"
            alt=""
          />
          <p>Science</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOIYM4S5m5A4mkHnZZETssZF6Q5Opuld2DccDla2zl4DozBMpcNO_x9p-hYlEsXEvJn8&usqp=CAU"
            alt=""
          />
          <p>Health</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JjtWRTC60uKGdW4Qxlga9-sqhGCmdxu7EA&usqp=CAU"
            alt=""
          />
          <p>Movies</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsp4VMyzk4uYZEvNcIlKMCrWlxNtLLWFHg7pg3zoQiM9Hkb4Y_pJ2AfF4FB04DzaonlUM&usqp=CAU"
            alt=""
          />
          <p>Technology</p>
        </div>

        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBpakDh56mJo0-2Ujq15n9dAmp0BRStzQtBLj-d65kdkTEz6fTkJW8UQG2-nnbxUga_c&usqp=CAU"
            alt=""
          />
          <p>Education</p>
        </div>
        <div className="sidebarOption">
          <Add />
          <p className="text">Discover Spaces</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarOptions;
