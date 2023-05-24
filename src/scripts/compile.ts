import thfx from "@thcare/thcarefx";
import fs from "fs";
import solution from "../main.js";

thfx.compile(solution, fs.writeFileSync);
