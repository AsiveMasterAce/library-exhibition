<template>
	<section id="cta-video" class="pt-24 pb-16 px-4">
		<div class="max-w-full mx-auto rounded-lg overflow-hidden bg-[#d8e8be]">
			<div class="grid md:grid-cols-2">
				<div class="relative min-h-[260px] md:min-h-[360px]">
					<video
						autoplay
						loop
						playsinline
						controls
						class="absolute inset-0 w-full h-full object-cover"
					>
						<source src="/videos/Library Exhibition .mp4" type="video/mp4" />
					</video>
					<div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>
				</div>

				<div class="p-8 md:p-12 flex flex-col justify-center gap-5" style="background: linear-gradient(135deg, #f8fcf0 0%, #f8fcf0 55%, #c8dda2 100%);">
					<p class="text-[#9fb847] uppercase tracking-[0.18em] text-xs">Exhibitor Spotlight</p>
					<h3 class="text-2xl md:text-4xl font-serif font-bold text-[#1f2d16]">
						Discover Our 2026 Exhibitors
					</h3>
					<p class="text-[#2f3e46] text-sm md:text-base leading-relaxed">
						Browse participating exhibitors, showcase highlights, and performance features.
					</p>

					<div>
						<a
							href="/docs/2026%20SALW%20PERFORMANCE%20AND%20EXHIBITION%20%281%29.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[#a6d680] text-[#292929] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
						>
							View Exhibitors
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
