const { test, trait } = use("Test/Suite")("Session");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
// const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

trait("Test/ApiClient");

test("it should return JWT token when session created", async ({ assert, client }) => {
	const password = "1234567890";

	const { $attributes: data } = await Factory.model("App/Models/User").create({
		password,
	});

	const user = { ...data, password };

	const response = await client
		.post("/sessions")
		.send(user)
		.end();

	response.assertStatus(200);
	assert.exists(response.body.token);
});
