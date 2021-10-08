import React from "react";
import Poster from "../components/Poster/poster.components";
import PlayPoster from "../config/playPoster.config";
import PlaysFilter from "../components/playsFilters/plays.components";
import PlaysPoster from "../components/PlaysPoster/playPoster.components";

const Plays = () => {


    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-8/12">
                        <h2 className="text-2xl font-bold">Plays in Bhavnagar</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <PlaysPoster 
                                src = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315003-vxylxmymfu-portrait.jpg"
                                title = "Many Faces of Korean Storytelling"
                                subtitle = "English ₹455"
                            />
                            </div>

                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <PlaysPoster 
                                src = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315003-vxylxmymfu-portrait.jpg"
                                title = "A Story within a story in the Mahabharata"
                                subtitle = "English 230"
                            />
                            </div>

                            <div  className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <PlaysPoster 
                                src = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315004-thdcspmbtd-portrait.jpg"
                                title = "Ramayana Connecting the Dots"
                                subtitle = "English 230"
                            />
                            </div>

                            <div  className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <PlaysPoster 
                                src = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315004-thdcspmbtd-portrait.jpg"
                                title = "Ramayana Connecting the Dots"
                                subtitle = "English 230"
                            />
                            </div>

                            <div  className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <PlaysPoster 
                                src = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315004-thdcspmbtd-portrait.jpg"
                                title = "Ramayana Connecting the Dots"
                                subtitle = "English 230"
                            />
                            </div>

                            <div  className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <PlaysPoster 
                                src = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315004-thdcspmbtd-portrait.jpg"
                                title = "Ramayana Connecting the Dots"
                                subtitle = "English 230"
                            />
                            </div>

                            <div  className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                            <PlaysPoster 
                                src = "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315004-thdcspmbtd-portrait.jpg"
                                title = "Ramayana Connecting the Dots"
                                subtitle = "English 230"
                            />
                            </div>
                        </div>
                    </div>  
                    <div className="lg:w-1/4">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weeked"]}/>
                            
                            
                            <PlaysFilter title="Language" tags={["English", "Hindi"]}/>
                            
                           
                            <PlaysFilter title="Categories" tags={["Theatre"]}/>
                            
                            <PlaysFilter title="Generes" tags={["Comedy", "Drama"]}/>
                      
                            <PlaysFilter title="More Filters" tags={["Online Streaming"]}/>
                           
                            <PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]}/>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;