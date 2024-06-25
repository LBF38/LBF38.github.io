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
	import * as m from '$paraglide/messages';
</script>

<H1>
	<span
		class="bg-gradient-to-tr from-blue-400 via-purple-300 to-emerald-300 box-decoration-clone bg-clip-text text-transparent dark:from-blue-900 dark:via-purple-600 dark:to-emerald-300"
	>
		{m.gaudy_weird_sawfish_file()}
	</span>
</H1>

<P>
	{@html m.trite_trick_firefox_renew()}
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
			<span>{m.clear_noisy_alpaca_drip()}</span>
			<Input type="text" name="name" placeholder={m.this_bold_bee_devour()} required />
		</Label>
		<!-- Optional -->
		<Label for="subject">
			<span>{m.east_watery_maggot_find()}</span>
			<Input type="text" name="subject" placeholder={m.east_pretty_mink_earn()} />
		</Label>
		<!-- Optional -->
		<Label for="email">
			<span>{m.happy_elegant_sheep_clip()}</span>
			<Input type="email" name="email" placeholder={m.orange_raw_racoon_twirl()} required />
		</Label>
		<!-- Optional -->
		<Label for="phone">
			<span>{m.witty_maroon_kitten_rush()}</span>
			<Input type="tel" name="phone" placeholder={m.proud_cool_swallow_dazzle()} />
		</Label>
		<!-- Optional -->
		<Label for="message">
			<span>{m.weary_drab_ape_flow()}</span>
			<Textarea
				class="textarea h-52"
				name="message"
				placeholder={m.just_clear_hound_borrow()}
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
			{m.gray_spare_kudu_stop()}
		</Button>
		<P>
			<em>
				{m.sharp_noisy_zebra_edit()}
				<Button href={route('staticforms')} variant="link" class="p-0">StaticForms</Button>
			</em>
		</P>
	</fieldset>
</form>
