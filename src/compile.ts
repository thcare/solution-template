import thcare from "@thcare/thfx";
import fs from "fs";
import solution from "./solution.js";

thcare.compile(solution, fs.writeFileSync);
