<script>
	import { blur } from 'svelte/transition';
</script>

<h1 class="h1">Feel free to contact me !</h1>
<p>
	You can fill the below to send me any information you may need. <br /> I'll be happy to answer your
	request !
</p>
<!-- Make sure you don't change the form action-->
<form
	action="https://api.staticforms.xyz/submit"
	method="post"
	class="mx-auto w-full max-w-xl p-5"
	transition:blur
>
	<fieldset>
		<legend class="legend">Contact Form</legend>
		<!-- Replace with accesKey sent to your email -->
		<input
			class="input"
			type="hidden"
			name="accessKey"
			value="eaa67da9-05d5-4686-bd7b-e4c205e90687"
		/>
		<!-- If we receive data in this field submission will be ignored -->
		<input class="input" type="text" name="honeypot" style="display: none;" />
		<!-- Optional -->
		<!-- Required -->
		<label for="name" class="label">
			<span>Name</span>
			<input class="input" type="text" name="name" required />
		</label>
		<!-- Optional -->
		<label for="subject" class="label">
			<span>Subject</span>
			<input class="input" type="text" name="subject" />
		</label>
		<!-- Optional -->
		<label for="email" class="label">
			<span>Email</span>
			<input class="input" type="email" name="email" required />
		</label>
		<!-- Optional -->
		<label for="phone" class="label">
			<span>Phone</span>
			<input class="input" type="tel" name="phone" />
		</label>
		<!-- Optional -->
		<label for="message" class="label">
			<span>Message</span>
			<textarea class="textarea h-52" name="message" />
		</label>
		<!-- Optional -->
		<!-- If you want replyTo to be set to specific email -->
		<!-- <input type="text" name="replyTo" value="myreplytoemail@example.com" /> -->
		<!-- Optional -->
		<!-- Specify @ as reply to value if you want it to be customers email -->
		<!-- <input type="hidden" name="replyTo" value="@" /> -->
		<!-- Optional -->
		<!-- If you want form to redirect to a specific url after submission -->
		<input type="hidden" name="redirectTo" value="http://localhost:5173/" />
		<!-- Optional -->
		<input
			class="input variant-filled-primary float-right max-w-xs"
			type="submit"
			value="Submit"
		/>
	</fieldset>
</form>
