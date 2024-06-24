<script lang="ts">
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import { typographyVariants } from '$lib/components/typography';
	import { H1, P } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { cn } from '$lib/utils';
	import { blur } from 'svelte/transition';
</script>

<H1>
	<span
		class="bg-gradient-to-tr from-blue-400 via-purple-300 to-emerald-300 box-decoration-clone bg-clip-text text-transparent dark:from-blue-900 dark:via-purple-600 dark:to-emerald-300"
	>
		Feel free to contact me !
	</span>
</H1>

<P>
	You can fill the contact form below to send me any information you may want.
	<br />
	I'll be happy to answer your request !
</P>

<!-- Make sure you don't change the form action-->
<form
	action="https://api.staticforms.xyz/submit"
	method="post"
	class="mx-auto w-full max-w-xl p-5"
	transition:blur
>
	<fieldset>
		<legend class={cn(typographyVariants({ variant: 'p' }), 'mx-auto')}>Contact Form</legend>
		<!-- Replace with accesKey sent to your email -->
		<Input type="hidden" name="accessKey" value="eaa67da9-05d5-4686-bd7b-e4c205e90687" />
		<!-- If we receive data in this field submission will be ignored -->
		<Input type="text" name="honeypot" style="display: none;" />
		<!-- Optional -->
		<!-- Required -->
		<Label for="name">
			<span>Name</span>
			<Input type="text" name="name" placeholder="Your name" required />
		</Label>
		<!-- Optional -->
		<Label for="subject">
			<span>Subject</span>
			<Input type="text" name="subject" placeholder="A topic..." />
		</Label>
		<!-- Optional -->
		<Label for="email">
			<span>Email</span>
			<Input type="email" name="email" placeholder="Your email" required />
		</Label>
		<!-- Optional -->
		<Label for="phone">
			<span>Phone</span>
			<Input type="tel" name="phone" placeholder="Your phone" />
		</Label>
		<!-- Optional -->
		<Label for="message">
			<span>Message</span>
			<Textarea
				class="textarea h-52"
				name="message"
				placeholder="A message you'd like to send me..."
			/>
		</Label>
		<!-- Optional -->
		<!-- If you want replyTo to be set to specific email -->
		<!-- <input type="text" name="replyTo" value="myreplytoemail@example.com" /> -->
		<!-- Optional -->
		<!-- Specify @ as reply to value if you want it to be customers email -->
		<!-- <input type="hidden" name="replyTo" value="@" /> -->
		<!-- Optional -->
		<!-- If you want form to redirect to a specific url after submission -->
		<!-- TODO: change it to use the typesafe router for sveltekit -->
		<Input
			type="hidden"
			name="redirectTo"
			value={$page.url.origin + route('/contact/success')}
		/>
		<!-- Optional -->
		<Button class="float-right my-4 max-w-xs" variant="outline" type="submit" value="Submit">
			Submit
		</Button>
		<P>
			<em>
				Powered by <Button href={route('staticforms')} variant="link" class="p-0">
					StaticForms
				</Button>
			</em>
		</P>
	</fieldset>
</form>
