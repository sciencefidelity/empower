<script lang="ts">
  import type { MarkProps } from '@portabletext/svelte'

  // Property custom marks receive from @portabletext/svelte when redered
  export let value: MarkProps<{
    value: {
      link: {
        href?: string
        blank?: boolean
      }
      internalLink: {

      }
    }
  }>

  const target = value?.link?.blank ? "_blank" : undefined
</script>

{#if value.link}
  <a
    href={value?.href}
    target={target}
    rel={target === "_blank" ? "noreferrer" : undefined}
  ><slot /></a>
{:else}
  <slot />
{/if}

{#if mark.internalLink}
  <a href={url}><slot /></a>
{:else}
  <slot />
{/if}
