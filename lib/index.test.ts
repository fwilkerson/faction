import it from "tape";

import { factory } from ".";

enum ActionTypes {
  FOO = "FOO",
  BAR = "BAR"
}

const mockParam = { date: +Date.now() };

it("should create actions from an enum", tap => {
  const actions = factory<ActionTypes>(ActionTypes);
  const action = actions.FOO(mockParam);

  tap.true(actions.hasOwnProperty(ActionTypes.FOO), "has foo");
  tap.true(actions.hasOwnProperty(ActionTypes.BAR), "has bar");
  tap.equal(action.type, ActionTypes.FOO, "type matches");
  tap.equal(action.payload, mockParam, "payload matches");
  tap.end();
});
