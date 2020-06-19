import { Component, OnInit, OnDestroy } from "@angular/core";

import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;

  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });

    // =============================================================
    // TASK Count cats
    function countCats(array) {
      return [].concat(...array).filter((n) => n === "^^").length;
    }
    const testArray = [
      [".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
      [2, NaN, "", false],
      [false, ".", 1, 0, null, "", 2, "dasdas", , NaN, true],
      ["."],
      [false, ".", 1, 0, true, null, "", NaN, 2, "dasdas"],
      [false, NaN, 1, 0, "."],
      [null, 1, NaN],
      [],
    ];
    // console.log(testArray);

    // countCats(testArray);
    // console.log(countCats(testArray));

    // =============================================================
    // TASK Carbon dating
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;

    function dateSample(sampleActivity) {
      if (!isValidData(sampleActivity)) {
        return false;
      }
      const N = Number(sampleActivity);
      // rate constant
      const k = 0.693 / HALF_LIFE_PERIOD;
      // approximate age
      const t = Math.log(MODERN_ACTIVITY / N) / k;
      return Math.ceil(t);
    }    
    function isValidData(val) {
      let value = +val;
      return !(
        typeof val !== "string" ||
        value > 15 ||
        value <= 0 ||
        isNaN(value)
      );
    }
    // console.log(dateSample("8.51944141558894"))

    // =============================================================
    // TASK Dream team
    const dreamTeam = [
      "Amelia",
      null,
      undefined,
      "Ruby",
      "Lily",
      11,
      "Grace",
      22,
      "Millie",
      "Daisy",
      true,
      "Freya",
      false,
      "Erin",
      new Set([1, 2, 3, 4, 5]),
      "Megan",
      {
        John: "Smith",
      },
      "Jasmine",
      1,
      2,
      3,
      4,
      5,
      "Brooke",
    ];
    function createDreamTeam(dreamTeam) {
      return !Array.isArray(dreamTeam)
        ? false
        : dreamTeam
            .map((item) => {
              if (typeof item === "string") {
                return item.trim().charAt(0).toUpperCase();
              }
            })
            .sort()
            .join("");
    }
    // console.log(createDreamTeam(dreamTeam));

    function createDreamTeamTEST(names: any[]): string | false {
      return !Array.isArray(names)
        ? false
        : names
            .filter(
              (name) =>
                typeof name === "string" && /[a-zA-Z]+$/gi.test(name.trim())
            )
            .map((name) => name.trim().charAt(0).toUpperCase())
            .sort()
            .join("");
    }
    // =============================================================
    // TASK WHAT SEASON
    function getSeason(date) {
      if (!arguments.length) {
        throw new Error("Unable to determine the time of year!");
        // throw new CustomError("Unable to determine the time of year!");
      }
      let month;
      try {
        month = date.getMonth();
      } catch (e) {
        throw new Error(e.message);
        // throw new CustomError(e.message);
      }

      switch (true) {
        case month <= 1 || month === 11:
          return "winter";
        case month >= 2 && month <= 4:
          return "spring";
        case month >= 5 && month <= 7:
          return "summer";
        case month >= 8:
          return "autumn";
      }
    }
    // console.log(getSeason(new Date(2150, 7, 21, 18, 36, 41, 841)));

    // =============================================================
    // TASK Tower of Hanoi
    function calculateHanoi(disksNumber, turnsSpeed) {
      const calcTurns = 2 ** disksNumber - 1;
      return {
        turns: 2 ** disksNumber - 1,
        seconds: Math.floor((calcTurns / turnsSpeed) * 60 * 60)
      };
    }
    // console.log(calculateHanoi(5, 4074));

    // =============================================================
    // TASK Transform array
    function transform(array) {
      let result = [];
      let isContinue = false;
    
      for (let i = 0, x = array.length; i < x; i++) {
        let item = array[i];
        if (isContinue) {
          isContinue = false;
          continue;
        }
    
        if (item === "--discard-next") {
          isContinue = true;
          continue;
        }
    
        if (item === "--double-next") {
          if (i === x - 1 ) {
            continue;
          }
          result.push(array[i + 1]);
          continue;
        }
    
        if (item === "--discard-prev") {
          if (array[i - 2] === "--discard-next") {
            continue;
          }
          result.pop();
          continue;
        }
    
        if (item === "--double-prev") {
          if (array[i - 2] === "--discard-next") {
            continue;
          }
          if(i === 0) {
            continue;
          }
          result.push(array[i - 1]);
          continue;
        }
        result.push(item);
      }
      return result;
    }

    const testTask = [
      1,
      "--discard-next",
      3,
      "--discard-prev",
      1337,
      "--double-next",
      4,
      5,
    ];
    // console.log(transform(testTask));

    // =============================================================
    // Chain maker original
    const chainMaker = {
      getLength() {
        if (!this.arr) {
          this.arr = [];
        }
        return this.arr.length;
      },
      addLink(value = "") {
        if (!this.arr) {
          this.arr = [];
        }
    
        this.arr.push(value);
        return this;
      },
      removeLink(position) {
        if (!this.arr) {
          this.arr = [];
        }
        if (
            position <= 0 ||
            typeof position !== "number" ||
            this.arr.length < position
        ) {
          throw new Error("An Error on removing wrong link");
        }
        this.arr.splice(position - 1, 1);
        return this;
      },
      reverseChain() {
        if (!this.arr) {
          this.arr = [];
        }
        this.arr.reverse();
        return this;
      },
      finishChain() {
        if (!this.arr) {
          this.arr = [];
        }
        const result = [...this.arr];
        this.arr = [];
        return result.map((n) => `( ${n} )`).join("~~");
      },
    };
    
    // console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());

    // Chain maker version 2
    function chain() {
      let arr = [];

      function getLength() {
        return arr.length;
      }

      function addLink(value) {
        arr.push(value);
        return this;
      }

      function removeLink(position) {
        arr.splice(position, 1);
        return this;
      }

      function reverseChain() {
        arr.reverse();
        return this;
      }

      function finishChain() {
        return arr.map((n) => `( ${n} )`).join("~~");
      }

      function test() {
        return this;
      }

      return {
        test,
        getLength,
        addLink,
        removeLink,
        reverseChain,
        finishChain,
      };
    }

    const chainMaker1 = chain();
    // console.log('test => ', chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain());

    // =============================================================
    // TASK Recursive depth calculator
    class DepthCalculator {
      calculateDepth(array) {
        function getArrayDepth(value) {
          return Array.isArray(value)
            ? !value.length 
                ? 1 
                : 1 + Math.max(...value.map(getArrayDepth))
            : 0;
        }
        return getArrayDepth(array);
      }
    }
    const testDepth = [1, 2, 3, 4, 5, [1]];
    const depthCalc = new DepthCalculator();
    const { calculateDepth } = depthCalc;
    // console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]));
    // =============================================================
    // TASK Extended repeater
    function repeater(string, options = {}) {
      const defaultOptions = {
        repeatTimes: 1,
        separator: "+",
        addition: "",
        additionRepeatTimes: 1,
        additionSeparator: "|",
      };

      let {
        repeatTimes,
        separator,
        addition,
        additionRepeatTimes,
        additionSeparator,
      } = Object.assign(defaultOptions, validateOptions(options));

      string = checkAndConvertToString(string);
      addition = checkAndConvertToString(addition);

      let resStr = "";

      for (let i = 0, j = repeatTimes; i < j; i++) {
        let segmentStr = string;

        for (let iAdd = 0, xAdd = additionRepeatTimes; iAdd < xAdd; iAdd++) {
          segmentStr +=
            iAdd !== xAdd - 1 ? addition + additionSeparator : addition;
        }

        if (i !== j - 1) {
          segmentStr += separator;
        }
        resStr += segmentStr;
      }
      return resStr;
    }

    function validateOptions(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] === undefined) {
            delete obj[key];
          }
        }
      }
      return obj;
    }

    function checkAndConvertToString(value) {
      return typeof value === "string" ? value : String(value);
    }

    // console.log(
    //   repeater("TESTstr", {
    //     repeatTimes: undefined,
    //     separator: "ds",
    //     addition: "ADD!",
    //     additionRepeatTimes: undefined,
    //     additionSeparator: ")))000",
    //   })
    // );






  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
