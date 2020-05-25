/* eslint-disable react/jsx-one-expression-per-line */
import { makeStyles } from '@material-ui/core/styles';
import Testimonial from './Testimonial';

const useStyles = makeStyles(() => ({
	swiperSlide: {
		width: '400px !important',
	},
	testimonialHighlight: {
		fontWeight: '700',
	},
}));

const TestimonialList = () => {
	const classes = useStyles();

	return (
		<>
			{/* 1 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Kathleen D.">
					After interviewing dozens of contractors, we hired Christian
					Construction to do a major kitchen remodel and could not be
					more pleased with the outcome. We were incredibly impressed
					with Wayne Christian's references.
					<span className={classes.testimonialHighlight}>
						{' '}
						Every client we contacted sang his praises, and now we
						know why. The quality of his work is outstanding,{' '}
					</span>
					but what we appreciated most was the clarity of
					communication, the transparency of billing/costs and his
					proactive approach. Wayne's deep knowledge and
					professionalism helped us to avoid some mistakes that we had
					not considered and his "can-do" attitude helped us achieve
					our dream kitchen.
				</Testimonial>
			</div>
			{/* 2 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Lisa Peterson at Premier Kitchens">
					<span className={classes.testimonialHighlight}>
						{' '}
						I have known and worked with Wayne over the past 5 years
						and highly recommend him and his company. The quality of
						his workmanship is consistently of the highest caliber.{' '}
					</span>
					It is always a pleasure to speak with Wayne's clients and
					hear about how happy they are to have him on their project.
					You are in good hands with Wayne!
				</Testimonial>
			</div>
			{/* 3 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Marianne Kearney Design">
					I’m an interior designer new to the East Bay Area so when it
					came time to hire a contractor to work on my home I looked
					for the best. I was referred by a colleague to Wayne of
					Christian Construction.
					<span className={classes.testimonialHighlight}>
						{' '}
						From the moment I met Wayne I was impressed. He’s down
						to earth, organized and professional. The work that he
						and his crew did on my home was done to my high
						standards.{' '}
					</span>
					I appreciate that he respected my design concept, asked
					questions for clarity and offered sound advice. His
					attention to detail and knowledge is impressive. I was
					particularly pleased with the labor intensive precision with
					which he and his team installed a geometric marble
					backsplash. From plumbing to building, Wayne's work is
					carried out with pride and skill. I highly recommend Wayne.
					I know I’ll be calling on him for future client projects.
				</Testimonial>
			</div>
			{/* 4 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Lisa H.">
					We hired Christian Construction to renovate our kitchen and
					prepare floors for new hardwoods in the dining and living
					rooms.
					<span className={classes.testimonialHighlight}>
						{' '}
						I am completely thrilled with the final product. Our new
						kitchen is amazing.{' '}
					</span>
					Wayne delt with many challenges regarding rotting floor
					joists and uneven floors, his crew work diligently to repair
					this old house. He communicated with us every step of the
					way and helped us make finishing decisions. Every thing came
					out better then I could have imagined. I would hire Wayne
					and his crew again. Thanks again Wayne.
				</Testimonial>
			</div>
			{/* 5 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Premier Kitchens">
					<span className={classes.testimonialHighlight}>
						{' '}
						Premier Kitchens has had a working relationship for 15+
						years with Christian Construction. Wayne Christian is
						one of our main "go to" contractors for kitchen and bath
						remodels.{' '}
					</span>
					He and his team are knowledgeable, professional and detail
					oriented. If I could add an extra star, I would for the
					amazing "can do" attitude they bring to each and every job!
				</Testimonial>
			</div>
			{/* 6 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Chelle E.">
					Wayne took on our project after our initial contractor
					balked and quit when we asked for more detail on his costs!
					Wayne was far more forthcoming and transparent about all his
					costs.
					<span className={classes.testimonialHighlight}>
						{' '}
						Throughout the project, we felt like he treated our
						money like it was his money.{' '}
					</span>
					He was also very understanding and flexible when we made
					changes and had to deal with some structural surprises along
					the way. He also went above and beyond when our architect /
					engineer got a little flaky -- he helped get a number of
					changes through the permitting office. Compared to other
					firms we considered, we liked that Wayne was on the job site
					every day. He had a small team of two helpers that he
					managed while working alongside them. He did all the
					plumbing and electrical work himself. His contract terms
					were also more reasonable. Wayne was friendly, reliable and
					always tried to understand the owner's perspective. He was
					also mindful of the fact that we had small children and were
					living in the house during the remodel. In terms of Wayne's
					work -- we had a large, complex job with lots of changes
					that spanned knocking out walls, new foundations, holding
					the roof to insert new support beams, an entirely new
					kitchen, a new master bath, a new laundry room and a new
					bathroom / entertainment area near the pool. We are very
					pleased with the results and get lots of compliments on the
					remodel - including comments on how well some of the
					framing, carpentry and finishing was done. I've included
					photos of before, during and after our for the living room /
					dining room / kitchen area that probably best capture the
					work done.
				</Testimonial>
			</div>
			{/* 7 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Marypat M.">
					I used Christian Construction to remodel my bathroom last
					summer.
					<span className={classes.testimonialHighlight}>
						{' '}
						I was very impressed with Wayne (the owner) and would
						highly recommend him to anyone looking to remodel. He
						was outstanding in every way.{' '}
					</span>
					I used Houzz to get ideas and he was able to translate them
					and improve on them. He is very knowledgable about all the
					obvious aspects of the remodel, plumbing, electrical, etc.
					but his ideas and problem solving set him apart from his
					competition. He was timely getting information to me and
					would recap and keep me updated with an email every few
					days. He kept to the schedule and the price he quoted me so
					I was happy from the beginning to the end. He is organized,
					and was careful to keep things clean and livable during the
					project. I kept some existing things in the bathroom and he
					was able to tie them in so the whole bathroom looks brand
					new. My husband noticed how nice and professional he was and
					would also give him 5 stars: bottom line, we would hire him
					again in a second!!!
				</Testimonial>
			</div>
			{/* 8 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Design Savvy">
					It is a pleasure to work with Wayne Christian on kitchen
					remodel projects.
					<span className={classes.testimonialHighlight}>
						{' '}
						I am a kitchen designer and enjoy working with him. I
						find him easy to work with, shows care for the client
						and their choices and does great work through out the
						completion of the project.{' '}
					</span>
					He takes care in his work and will make extra changes to
					better the design with out hesitation. I look forward to
					working with him on more projects!
				</Testimonial>
			</div>
			{/* 9 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Brian B.">
					We hired Wayne to remodel two of our bathrooms in Walnut
					Creek.{' '}
					<span className={classes.testimonialHighlight}>
						{' '}
						He did an amazing job. He listened carefully to our
						needs and worked with us to come up with creative
						solutions to some design challenges.{' '}
					</span>
					He is extremely conscientious, taking special care to limit
					dust in our house and to tidy up each day. He stayed on
					budget and was very transparent about all costs, sending us
					regular updates. Very good craftsmanship as well. We highly
					recommend Wayne.
				</Testimonial>
			</div>
			{/* 10 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Jason R.">
					<span className={classes.testimonialHighlight}>
						{' '}
						We hired Wayne for a master bathroom remodel and could
						not have been happier both during the process and with
						the final result.{' '}
					</span>
					From the beginning Wayne was responsive and prepared. On his
					initial walk through he discussed his ideas and was very
					responsive to the ideas we had too. He came in on budget and
					on time. Professionally Wayne is fantastic. His
					craftsmanship is remarkable. He has a great eye for the big
					picture and how everything will fit in. He had excellent
					suggestions for everything from the aesthetics of wall
					placement to suggesting we install an outlet in a drawer in
					the vanity so we wouldn't have to deal with moving the hair
					dryer (first-world problems, I realize). He was on site
					every day and was always available to discuss where we were
					in the project. Besides being a consummate professional,
					Wayne is incredibly personable as well. His crew is friendly
					and our kids loved having them around the house. He even
					coached me up on a couple home improvement projects I was
					working on. He's fun to talk to, easy to work with, and a
					great resource to bounce ideas off of. We have recommended
					him to other friends and will most definitely use him again
					when we decide to pull the trigger on a new kitchen.
				</Testimonial>
			</div>
			{/* 11 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Geoffe W.">
					Wayne was at our house performing the work himself every day
					of the project. He was very professional every step of the
					way.
					<span className={classes.testimonialHighlight}>
						{' '}
						His vast experience and attention to details helped see
						potential issues ahead of time which eliminated
						unnecessary delays.{' '}
					</span>
					Our project included some challenging structural work and
					Wayne took care of it like it was not a problem at all (even
					though I know he worked really hard to make it all work).
					Wayne was able to perform all the contracted work per the
					contracted budget and was accommodating when it came to
					extras not included. The final product is the dream kitchen
					we we had envisioned during the design stage. We could not
					be happier with the outcome!
				</Testimonial>
			</div>
			{/* 12 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Deanna W.">
					We hired Christian Construction to renovate our master
					bathroom. The project involved going down to the studs and
					moving some interior closets next to the bathroom to make
					the space bigger. Christian construction provided us a fixed
					bid and stuck to the price even though minor changes were
					needed. His crew was there every day, they were respectful
					and clean and were always available when we called.
					<span className={classes.testimonialHighlight}>
						{' '}
						We will definately use them again. We love our new
						bathroom!{' '}
					</span>
				</Testimonial>
			</div>
			{/* 13 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="All American Glass">
					<span className={classes.testimonialHighlight}>
						{' '}
						Excellent company to work with! Great craftsmanship,
						well organized and clean job-sites. Really enjoy working
						with Wayne on his projects, he is a stand up guy.{' '}
					</span>
					We really see the quality of his work means we are the last
					subs to work on the job-site. Really looking forward to
					working with Wayne on many future projects.
				</Testimonial>
			</div>
			{/* 14 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Laura A.">
					We hired Christian Construction to remodel our guest house.
					They were a great team, did excellent work, were very
					accommodating and easy to work with.
					<span className={classes.testimonialHighlight}>
						{' '}
						More specifically, communication was good, the jobsite
						was always well maintained and tidy, the crew arrived on
						time and when expected and the estimate and budget was
						accurate.{' '}
					</span>
					When items such as more wall plugs and a change of window
					size occurred, Wayne explained the additional time required
					and the added cost as to not surprise us in the end. We
					would highly recommend Christian Construction and plan to
					use them on our main house bathroom remodels in the near
					future!
				</Testimonial>
			</div>
			{/* 15 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Mary D.">
					<span className={classes.testimonialHighlight}>
						{' '}
						We were impressed with Wayne's thoroughness at our very
						first meeting as he carefully evaluated our project and
						discussed our various options.{' '}
					</span>
					He arranged to start our demolition after the new cabinets
					arrived so that we could make certain they were exactly what
					we wanted. When he started, the work moved quickly and
					painlessly. It was a pleasure to have Wayne and his
					assistants in our home. They were always considerate of our
					needs and left our home as tidy as possible at the end of
					each day. I was impressed with how Wayne worked with his
					young assistant. He was a patient and generous teacher and
					it was a pleasure to listen to their give and take! He was
					on time and on budget and his work is flawless. If there was
					ever a concern, he addressed it immediately. I am VERY happy
					to give Christian Construction all 5 well deserved stars!
				</Testimonial>
			</div>
			{/* 16 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Erin De.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Wayne and his crew were a complete pleasure to deal with
						from beginning to the end. We never felt the high
						anxiety and exasperation that one often hears about
						during a kitchen remodel.{' '}
					</span>
					The work was done on time and on budget. Wayne particularly
					made every effort to get the best and smartest finished
					product down to the smallest detail. Everything was
					explained in advance and when adjustments needed to be made
					to the original plan, options and recommendations were
					outlined and thoroughly discussed. Once he started the
					project he worked a regular schedule and we knew when he
					would be there. The work site was kept tidy and he cleaned
					up every day before leaving. The kitchen is beautiful and
					the transformation striking. We would recommend Christian
					Construction without reservation.
				</Testimonial>
			</div>
			{/* 17 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Clare N.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Wayne Christian of Christian Construction was a
						fantastic contractor to work with.{' '}
					</span>
					We hired him for a complete kitchen remodel. He helped us
					get out from under a prior design we would have never been
					happy with, and pointed us to a design and cabinet set we
					are definitely happy with. The kitchen remodel lasted about
					4 months total. During that time, Wayne helped us set up our
					temporary kitchen in another room. He understood the
					disruption the remodel would cause, and was very
					accommodating during this time. Wayne is a wonderful
					communicator- whenever problems came up, he was first to
					point them out and come up with pros and cons of the various
					solutions. He graciously answered our repetitive questions,
					and made sure we stayed on top of our own work for the
					kitchen (selecting door pulls, kitchen sink, etc). We love
					our new kitchen! Wayne is very detailed, and made sure that
					all loose ends (literal and figurative) come together. He
					has been a pleasure to work with, and the final result of
					his work is wonderful! We highly recommend Christian
					Construction for your project!
				</Testimonial>
			</div>
			{/* 18 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Bob L.">
					We worked with Wayne to remodel our kitchen. The job
					entailed pushing an exterior wall out 2 feet, supporting the
					extension with a steel beam and a complete interior
					redesign/remodel.
					<span className={classes.testimonialHighlight}>
						{' '}
						Wayne did an outstanding job. He partnered with me from
						the very beginning as we discussed design ideas and laid
						out the schedule.{' '}
					</span>
					He was exceptionally accommodating and worked very hard to
					minimize the inevitable disruptions that a big kitchen
					remodel will create. He even set up a temporary kitchen sink
					for us in our downstairs shower (very creative). He always
					had a positive "can do" attitude and essentially became an
					extended member of the family for the duration of the
					project. We are very happy with how the project went as well
					as the finished product. I wouldn't hesitate to recommend
					him and would definitely use him again.
				</Testimonial>
			</div>
			{/* 19 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Kern S.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Christian Construction provided a professional, high
						quality, job well done.{' '}
					</span>
					They showed up on time, kept us well informed as the job
					progressed. The job site was always tidy. There were never
					any access issues to the home. They worked with us on small
					details very well. I was very comfortable leaving the home
					while the crew was on site. They always showed up in a good
					mood! I would highly recommend them to anyone.
				</Testimonial>
			</div>
			{/* 20 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Cathy M.">
					Services provided were floor leveling and installation of
					tile in the master bath.
					<span className={classes.testimonialHighlight}>
						{' '}
						Christian Construction was wonderful.{' '}
					</span>
					Always in contact with me regarding How the project was
					coming along. Very conscientious with rest of my home,
					covering carpets and cleaning up everyday. They took the
					time to lay out the tile so i could decide on placement of
					individual tiles prior to installation. The floor was done
					on schedule and budget. Beautiful job! Christian
					Construction was phenomenal to work with.
				</Testimonial>
			</div>
			{/* 21 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Deanna W.">
					<span className={classes.testimonialHighlight}>
						{' '}
						We recently did a full remodel of our kitchen, and were
						lucky enough to have the opportunity to work with Wayne.{' '}
					</span>
					In the initial design stages, Wayne was great in talking
					through our design ideas, showing us examples of his recent
					work that incorporated some of these concepts, and even
					forwarding us ideas on Houzz to help inspire us. During the
					construction period, Wayne was very thorough in ensuring
					that he kept the workspace as clean as possible, and always
					kept our family's comfort in mind as we lived through the
					"fun" of trying to live in a house during construction! We
					could not have been happier with the results of the remodel.
					Wayne's has a high attention to details and really worked
					with us in what we considered "tricky" design details. He
					has a great communication style and kept us informed all the
					way. We would definitely use Wayne again, and would
					recommend him highly.
				</Testimonial>
			</div>
			{/* 22 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Sabine K.">
					You'll see the true colors of a contractor when an
					unexpected problem in your project arises. Well, we had two
					or three snafus during the remodeling of our kitchen, but
					Wayne Christian was always super helpful, resourceful and
					patient to help us out of problems which arose. Additional
					work which needed to be done was charged at a very fair
					price.
					<span className={classes.testimonialHighlight}>
						{' '}
						My husband (an engineer) is super picky about any
						contractor's work, and Wayne is one of two he actually
						thought did an outstanding job.{' '}
					</span>
					Wayne has done many kitchen remodels, so he plans the
					process very well with a lot of attention to detail. Even if
					it's your first kitchen remodel you'll be fine, as he'll
					guide you through it!
				</Testimonial>
			</div>
			{/* 23 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Camille T.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Our recent kitchen lighting upgrade was the third time
						we had worked with Wayne Christian on home improvement
						projects.{' '}
					</span>
					Being renovation novices, we appreciated his recommendations
					for improvements on our initial concept. We were pleasantly
					surprised at how little we were inconvenienced while he
					inhabited our kitchen for several hours each day until the
					project was completed. He kept the work space remarkably
					clean, and moved his materials and equipment out of the way
					daily, to provide us access to this critical room in our
					home. We will continue to recommend him to our friends
					seeking top-quality craftsmanship, attention to detail,
					professionalism and courtesy from their contractor.
				</Testimonial>
			</div>
			{/* 24 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Frank K.">
					Wayne completed our kitchen and various other construction
					jobs, den lighting, conversion of closet to wine
					refrigerator, repair/replacement of exterior siding.
					<span className={classes.testimonialHighlight}>
						{' '}
						He is a methodical and detailed planner delivering
						timely outstanding results. Trustworthy and dependable.
						We were always amazed at his resourcefulness. He is a
						professional who we highly recommend.{' '}
					</span>{' '}
					In October 2015, Wayne completed our Bath remodel -
					demolishing the existing structure, removing the tub,
					installing new sub flooring and providing a good
					subcontractor for the tile work. The laundry room and
					adjacent guest bathroom were also retiled. He continually
					provided timely updates until completion. We highly
					recommend him.
				</Testimonial>
			</div>
			{/* 25 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Jen A.">
					Wayne Christian completed our recent remodel of two
					bathrooms in our home.
					<span className={classes.testimonialHighlight}>
						{' '}
						We highly recommend him without reservations! Wayne was
						wonderful to work with in every way.{' '}
					</span>
					He provided us with a competitive bid as well as detailed
					plans and a timeline. The project went very smoothly. All of
					Wayne's work was excellent - thorough and detail-oriented.
					He was at our home every day, even on days when his
					subcontractor was doing the work. Wayne is a great
					communicator and he went above and beyond to confirm every
					important decision. He is honest and fair - we trusted him
					completely. Beyond all of that, Wayne is just the nicest
					person! Our kids loved him. He brought the sheet rock for
					our bathroom onto our patio a few days ahead so our daughter
					could decorate it. We are so pleased with the outcome of
					Wayne's work and we would be very pleased to work with him
					again in the future.
				</Testimonial>
			</div>
			{/* 26 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Ed A.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Another excellent job!{' '}
					</span>
					We hired Christian Construction to install some electrical
					timers and wiring for a complicated project involving both
					the inside and outside of our home. Wayne helped us pick out
					the appropriate timers, which was not straightforward, and
					answered questions regarding details and concerns we had
					regarding the project.Upon completion, the work was first
					rate. This is the third time we have used Christian
					Construction and they have always exceed our expectations.
				</Testimonial>
			</div>
			{/* 26 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Kate S.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Our kitchen is beautiful and our experience was
						positive.{' '}
					</span>
					We felt heard in our hopes for the aesthetic as well as the
					functional. Wayne Christian encouraged us to speak up when
					we had ideas or concerns. They worked diligently and gave us
					just what we'd hoped for.
				</Testimonial>
			</div>
			{/* 27 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Erin D.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Christian Construction did a fantastic job remodeling
						our kitchen a couple of years ago.{' '}
					</span>
					When we discovered a damp carpet and wet wall in our family
					room we called Wayne and he showed up within hours. He made
					room in his schedule to meet with our insurance adjuster,
					provided emergency restoration services and in the end
					demoed much of the family room and all of the fireplace and
					repaired everything. Additionally, we discovered some bad
					siding on our house and he replaced that and repainted it.
					We can’t say enough about Wayne’s professionalism. He
					communicated well with us about the scope of the repair, did
					high quality work and showed up when he said he would. We
					were very happy with the end result of our unexpected
					project thanks to Wayne and Christian Construction. We
					recommend Christian Construction enthusiastically.
				</Testimonial>
			</div>
			{/* 28 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Erin D.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Christian Construction did a fantastic job remodeling
						our kitchen a couple of years ago.{' '}
					</span>
					When we discovered a damp carpet and wet wall in our family
					room we called Wayne and he showed up within hours. He made
					room in his schedule to meet with our insurance adjuster,
					provided emergency restoration services and in the end
					demoed much of the family room and all of the fireplace and
					repaired everything. Additionally, we discovered some bad
					siding on our house and he replaced that and repainted it.
					We can’t say enough about Wayne’s professionalism. He
					communicated well with us about the scope of the repair, did
					high quality work and showed up when he said he would. We
					were very happy with the end result of our unexpected
					project thanks to Wayne and Christian Construction. We
					recommend Christian Construction enthusiastically.
				</Testimonial>
			</div>
			{/* 29 */}
			<div className={`swiper-slide ${classes.swiperSlide}`}>
				<Testimonial clientName="Paula P.">
					<span className={classes.testimonialHighlight}>
						{' '}
						Hiring Wayne Christian to do our kitchen remodel was the
						absolute best decision we made in the entire project.{' '}
					</span>
					We had to bury a 17 foot steel I-beam in the ceiling to hold
					up the 2nd story of our house in order to remove a wall that
					opened up our space. There were many obstacles in doing
					this, including routing of electrical, plumbing vents, and
					venting of our exhaust hood to the outside. Wayne always had
					a solution and discussed options with us. Despite the
					additional time involved to do some of this, he was
					extremely fair with change orders and we never felt
					"nickeled and dimed." He worked very well with other parties
					including the kitchen designer, the cabinet installer, and
					the granite fabricator/installer so that led to a minimum of
					problems during the job. He works alone (although sometimes
					with his son Andrew in the summer) so if you are looking for
					the fastest job, look elsewhere. But he was diligent in
					keeping our job moving forward with very few days that he
					had to go to another client/project. Wayne is a terrific
					person, very creative, very meticulous, and always conscious
					of minimizing the disruption on us. We feel he has become a
					friend, plus someone we would not hesitate to recommend to
					anyone. All-in-all, it was the best experience we've ever
					had with a remodeling contractor. Highly recommended! We
					couldn't have been more pleased with the experience with
					Wayne and the outcome of our beautiful kitchen. Bill and
					Ginger Wadsworth
				</Testimonial>
			</div>
		</>
	);
};

export default TestimonialList;
